import React from 'react';
import Header from '../Header';
import PanelBody from '../PanelBody';
import { PanelSharedProps } from '../../interface';
import useCellClassName from '../../hooks/useCellClassName';
import {
  isSameDate,
  isSameMonth,
  getWeekStartDate
} from '../../_utils/dateUtils';

export type DatePanelProps<DateType> = PanelSharedProps<DateType>;
export const DATE_ROW_COUNT = 6;
export const WEEK_DAY_COUNT = 7;

function DatePanel<DateType>(props: DatePanelProps<DateType>) {
  const {
    generateConfig,
    prefixCls,
    value,
    viewDate,
    onViewDateChange
  } = props;
  const baseDate = getWeekStartDate(undefined, generateConfig, viewDate);

  const headerCells: React.ReactNode[] = [];
  const weekFirstDay = generateConfig.locale.getWeekFirstDay();
  const weekDaysLocale: string[] = generateConfig.locale.getShortWeekDays();
  for (let i = 0; i < WEEK_DAY_COUNT; i += 1) {
    headerCells.push(
      <th key={i}>{weekDaysLocale[(i + weekFirstDay) % WEEK_DAY_COUNT]}</th>
    );
  }
  const getCellClassName = useCellClassName({
    cellPrefixCls: `${prefixCls}-cell`,
    value,
    today: generateConfig.getNow(),
    isSameCell: (current, target) =>
      isSameDate(generateConfig, current, target),
    isInView: date => isSameMonth(generateConfig, date, viewDate)
  });

  const onYearChange = (diff: number) => {
    const newDate = generateConfig.addYear(viewDate, diff);
    onViewDateChange(newDate);
  };
  const onMonthChange = (diff: number) => {
    const newDate = generateConfig.addMonth(viewDate, diff);
    onViewDateChange(newDate);
  };
  return (
    <div>
      <Header
        {...props}
        onSuperPrev={() => onYearChange(-1)}
        onSuperNext={() => onYearChange(1)}
        onPrev={() => onMonthChange(-1)}
        onNext={() => onMonthChange(1)}
      >
        <div>
          {generateConfig.locale.format({
            date: viewDate,
            format: 'YYYY年 M月'
          })}
        </div>
      </Header>
      <PanelBody
        {...props}
        rowNum={DATE_ROW_COUNT}
        colNum={WEEK_DAY_COUNT}
        baseDate={baseDate}
        getCellDate={generateConfig.addDate}
        getCellText={generateConfig.getDate}
        getCellClassName={getCellClassName}
        headerCells={headerCells}
      />
    </div>
  );
}
export default DatePanel;
