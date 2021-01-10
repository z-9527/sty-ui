import { classnames } from '@/components/_utils';
import React from 'react';

export interface PanelBodyProps<DateType> {
  prefixCls?: string;
  headerCells?: React.ReactNode;
  rowNum: number; // 行数
  colNum: number; // 列数
  baseDate: DateType;
  getCellDate: (date: DateType, offset: number) => DateType;
  getCellText: (date: DateType) => React.ReactNode;
  getCellClassName: (date: DateType) => Record<string, boolean | string>;
  onSelect: (value: DateType) => unknown;
}

function PanelBody<DateType>(props: PanelBodyProps<DateType>) {
  const {
    prefixCls: prefixClsProps,
    headerCells,
    rowNum,
    colNum,
    baseDate,
    getCellDate,
    getCellText,
    getCellClassName,
    onSelect
  } = props;
  const rows: React.ReactNode[] = [];

  const prefixCls = `${prefixClsProps}-body`;
  for (let i = 0; i < rowNum; i++) {
    const row: React.ReactNode[] = [];
    for (let j = 0; j < colNum; j++) {
      const offset = i * colNum + j;
      const currentDate = getCellDate(baseDate, offset);
      const cellText = getCellText(currentDate);
      row.push(
        <td
          key={j}
          className={classnames({
            [`${prefixClsProps}-cell`]: true,
            ...getCellClassName(currentDate)
          })}
          onClick={() => onSelect(currentDate)}
        >
          {cellText}
        </td>
      );
    }
    rows.push(<tr key={i}>{row}</tr>);
  }

  return (
    <div className={prefixCls}>
      <table className={`${prefixCls}-content`}>
        {headerCells && (
          <thead>
            <tr>{headerCells}</tr>
          </thead>
        )}
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default PanelBody;
