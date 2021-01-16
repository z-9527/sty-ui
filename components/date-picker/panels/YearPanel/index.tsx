import React from 'react';
import Header from '../Header';
import PanelBody from '../PanelBody';
import { PanelSharedProps } from '../../interface';
import useCellClassName from '../../hooks/useCellClassName';
import { isSameYear } from '../../_utils/dateUtils';

export type YearPanelProps<DateType> = PanelSharedProps<DateType>;
const YEAR_COL_COUNT = 3;
const YEAR_ROW_COUNT = 4;
const YEAR_DECADE_COUNT = 10;

function YearPanel<DateType>(props: YearPanelProps<DateType>) {
  const {
    prefixCls,
    generateConfig,
    viewDate,
    value,
    picker,
    onViewDateChange,
    onPanelChange,
    onSelect
  } = props;

  const yearNumber = generateConfig.getYear(viewDate);
  const startYear =
    Math.floor(yearNumber / YEAR_DECADE_COUNT) * YEAR_DECADE_COUNT;
  const endYear = startYear + YEAR_DECADE_COUNT - 1;
  const baseYear = generateConfig.setYear(
    viewDate,
    startYear -
      Math.ceil((YEAR_COL_COUNT * YEAR_ROW_COUNT - YEAR_DECADE_COUNT) / 2)
  );

  const isInView = (date: DateType) => {
    const currentYearNumber = generateConfig.getYear(date);
    return startYear <= currentYearNumber && currentYearNumber <= endYear;
  };
  const getCellClassName = useCellClassName({
    cellPrefixCls: `${prefixCls}-cell`,
    generateConfig,
    value,
    isSameCell: (current, target) =>
      isSameYear(generateConfig, current, target),
    isInView
  });

  const onDecadeChange = (diff: number) => {
    const newDate = generateConfig.addYear(viewDate, diff * 10);
    onViewDateChange(newDate);
  };

  function onDecadeClick() {
    onPanelChange('decade', viewDate);
  }
  return (
    <div>
      <Header
        {...props}
        onSuperPrev={() => onDecadeChange(-1)}
        onSuperNext={() => onDecadeChange(1)}
      >
        <div onClick={onDecadeClick}>
          {startYear}-{endYear}
        </div>
      </Header>
      <PanelBody<DateType>
        {...props}
        colNum={YEAR_COL_COUNT}
        rowNum={YEAR_ROW_COUNT}
        baseDate={baseYear}
        getCellDate={generateConfig.addYear}
        getCellText={generateConfig.getYear}
        getCellClassName={getCellClassName}
        onSelect={date => {
          onSelect(date);
          picker !== 'year' && onPanelChange('month', date);
        }}
      />
    </div>
  );
}

export default YearPanel;
