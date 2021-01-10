/* eslint-disable prettier/prettier */
import React from 'react';
import Header from '../Header';
import PanelBody from '../PanelBody';
import { PanelSharedProps } from '../../interface';

export type DecadePanelProps<DateType> = PanelSharedProps<DateType>;
export const DECADE_UNIT_DIFF = 10;
export const DECADE_DISTANCE_COUNT = DECADE_UNIT_DIFF * 10;
export const DECADE_COL_COUNT = 3;
export const DECADE_ROW_COUNT = 4;
export const DECADE_UNIT_DIFF_DES = DECADE_UNIT_DIFF - 1;

function DecadePanel<DateType>(props: DecadePanelProps<DateType>) {
  const { generateConfig, viewDate, prefixCls, onViewDateChange } = props;
  const cellPrefixCls = `${prefixCls}-cell`;

  const yearNumber = generateConfig.getYear(viewDate);
  const startYear = Math.floor(yearNumber / DECADE_DISTANCE_COUNT) * DECADE_DISTANCE_COUNT;
  const endYear = startYear + DECADE_DISTANCE_COUNT - 1;
  const decadeYearNumber = Math.floor(yearNumber / DECADE_UNIT_DIFF) * DECADE_UNIT_DIFF;

  const baseDecadeYear = generateConfig.setYear(
    viewDate,
    startYear -
    Math.ceil(
      (DECADE_COL_COUNT * DECADE_ROW_COUNT * DECADE_UNIT_DIFF - DECADE_DISTANCE_COUNT) / 2
    )
  );

  const getCellClassName = (date: DateType) => {
    const startDecadeNumber = generateConfig.getYear(date);
    const endDecadeNumber = startDecadeNumber + DECADE_UNIT_DIFF_DES;

    return {
      [`${cellPrefixCls}-in-view`]:
        startYear <= startDecadeNumber && endDecadeNumber <= endYear,
      [`${cellPrefixCls}-selected`]: startDecadeNumber === decadeYearNumber
    };
  };

  function onDecadesChange(diff: number) {
    const newDate = generateConfig.addYear(
      viewDate,
      diff * DECADE_DISTANCE_COUNT
    );
    onViewDateChange(newDate);
  };
  return (
    <div>
      <Header
        {...props}
        onSuperNext={() => onDecadesChange(1)}
        onSuperPrev={() => onDecadesChange(-1)}
      >
        {startYear} - {endYear}
      </Header>
      <PanelBody
        {...props}
        rowNum={DECADE_ROW_COUNT}
        colNum={DECADE_COL_COUNT}
        baseDate={baseDecadeYear}
        getCellText={date => {
          const startDecadeNumber = generateConfig.getYear(date);
          return `${startDecadeNumber}-${startDecadeNumber + DECADE_UNIT_DIFF_DES
            }`;
        }}
        getCellDate={(date, offset) =>
          generateConfig.addYear(date, offset * DECADE_UNIT_DIFF)
        }
        getCellClassName={getCellClassName}
      />
    </div>
  );
}

export default DecadePanel;
