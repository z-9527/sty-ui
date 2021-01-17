import React from 'react';
import { classnames } from '@/components/_utils';
import { PanelMode } from '../interface';
import { GenerateConfig } from '../generate';
import { getCellDateDisabled } from '../_utils/dateUtils';

export interface PanelBodyProps<DateType> {
  prefixCls?: string;
  headerCells?: React.ReactNode;
  rowNum: number; // 行数
  colNum: number; // 列数
  baseDate: DateType;
  mode?: PanelMode;
  disabledDate?: (date: DateType) => boolean;
  getCellDate: (date: DateType, offset: number) => DateType;
  getCellText: (date: DateType) => React.ReactNode;
  getCellClassName: (date: DateType) => Record<string, boolean | string>;
  onSelect: (value: DateType) => unknown;
  generateConfig: GenerateConfig<DateType>;
}

function PanelBody<DateType>(props: PanelBodyProps<DateType>) {
  const {
    prefixCls: prefixClsProps,
    headerCells,
    rowNum,
    colNum,
    baseDate,
    mode,
    disabledDate,
    getCellDate,
    getCellText,
    getCellClassName,
    onSelect,
    generateConfig
  } = props;
  const rows: React.ReactNode[] = [];

  const prefixCls = `${prefixClsProps}-body`;
  const cellPrefixCls = `${prefixClsProps}-cell`;
  for (let i = 0; i < rowNum; i++) {
    const row: React.ReactNode[] = [];
    for (let j = 0; j < colNum; j++) {
      const offset = i * colNum + j;
      const currentDate = getCellDate(baseDate, offset);
      const cellText = getCellText(currentDate);

      const disabled = getCellDateDisabled({
        cellDate: currentDate,
        mode,
        disabledDate,
        generateConfig
      });

      row.push(
        <td
          key={j}
          className={classnames({
            [`${cellPrefixCls}-disabled`]: disabled,
            [cellPrefixCls]: true,
            ...getCellClassName(currentDate)
          })}
          onClick={() => {
            if (!disabled) {
              onSelect(currentDate);
            }
          }}
        >
          <div className={`${cellPrefixCls}-inner`}>{cellText}</div>
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
