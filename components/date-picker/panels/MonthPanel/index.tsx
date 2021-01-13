import React from 'react';
import Header from '../Header';
import PanelBody from '../PanelBody';
import locale from '../../generate/locale';
import { PanelSharedProps } from '../../interface';
import useCellClassName from '../../hooks/useCellClassName';
import { isSameMonth } from '../../_utils/dateUtils';

export type MonthPanelProps<DateType> = PanelSharedProps<DateType>;
export const MONTH_COL_COUNT = 3;
export const MONTH_ROW_COUNT = 4;

function MonthPanel<DateType>(props: MonthPanelProps<DateType>) {
  const {
    prefixCls,
    generateConfig,
    value,
    viewDate,
    picker,
    onViewDateChange,
    onPanelChange,
    onSelect
  } = props;
  const baseMonth = generateConfig.setMonth(viewDate, 0);
  const getCellClassName = useCellClassName({
    cellPrefixCls: `${prefixCls}-cell`,
    value,
    isSameCell: (current, target) =>
      isSameMonth(generateConfig, current, target),
    isInView: () => true
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
          {generateConfig.locale.format({
            date: viewDate,
            format: locale.yearFormat
          })}
        </div>
      </Header>
      <PanelBody<DateType>
        {...props}
        rowNum={MONTH_ROW_COUNT}
        colNum={MONTH_COL_COUNT}
        baseDate={baseMonth}
        getCellDate={generateConfig.addMonth}
        getCellText={date =>
          generateConfig.locale.getShortMonths()[generateConfig.getMonth(date)]
        }
        getCellClassName={getCellClassName}
        onSelect={date => {
          onSelect(date);
          picker !== 'month' && onPanelChange('date', date);
        }}
      />
    </div>
  );
}

export default MonthPanel;
