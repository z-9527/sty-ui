import React from 'react';
import Header from '../Header';
import PanelBody from '../PanelBody';
import locale from '../../generate/locale';
import { PanelSharedProps } from '../../interface';
import useCellClassName from '../../hooks/useCellClassName';
import { isSameMonth } from '../../_utils/dateUtils';

export type MonthPanelProps<DateType> = PanelSharedProps<DateType>;

function MonthPanel<DateType>(props: MonthPanelProps<DateType>) {
  const {
    generateConfig,
    value,
    viewDate,
    onViewDateChange,
    onPanelChange
  } = props;
  const baseMonth = generateConfig.setMonth(viewDate, 0);
  const getCellClassName = useCellClassName({
    value,
    isSameCell: (current, target) =>
      isSameMonth(generateConfig, current, target)
  });
  const onYearChange = (diff: number) => {
    const newDate = generateConfig.addYear(viewDate, diff);
    onViewDateChange(newDate);
  };
  function onYearClick() {
    onPanelChange('year', viewDate);
  }
  return (
    <div>
      <Header
        {...props}
        onSuperNext={() => onYearChange(1)}
        onSuperPrev={() => onYearChange(-1)}
      >
        <div onClick={onYearClick}>
          {generateConfig.local.format({
            date: viewDate,
            format: locale.yearFormat
          })}
        </div>
      </Header>
      <PanelBody<DateType>
        {...props}
        rowNum={4}
        colNum={3}
        baseDate={baseMonth}
        getCellDate={generateConfig.addMonth}
        getCellText={date =>
          generateConfig.local.getShortMonths()[generateConfig.getMonth(date)]
        }
        getCellClassName={getCellClassName}
      />
    </div>
  );
}

export default MonthPanel;
