import React, { useEffect, useState } from 'react';
import MonthPanel from './MonthPanel';
import DecadePanel from './DecadePanel';
import YearPanel from './YearPanel';
import DatePanel from './DatePanel';
import { DatePanelProps, PanelMode, PickerValue } from '../interface';
import generateConfig from '../generate';
import { Dayjs } from 'dayjs';
import { isEqual, formatDate } from '../_utils/dateUtils';
import { classnames } from '@/components/_utils';

function DatePanelIndex(props: DatePanelProps) {
  const {
    prefixCls,
    value: valueProps,
    defaultValue,
    generateConfig,
    picker,
    isRange,
    onSelect: onSelectProps,
    onChange: onChangeProps,
    onPanelChange: onPanelChangeProps,
    renderExtraFooter,
    className,
    style
  } = props;
  const [value, setValue] = useState<PickerValue<Dayjs>>(defaultValue);
  const [viewDate, setViewDate] = useState<Dayjs>(() => {
    if (isRange) {
      return valueProps?.[0] || defaultValue?.[0] || generateConfig.getNow();
    }
    return valueProps || defaultValue || generateConfig.getNow();
  });
  const [mergedMode, setMergedMode] = useState<PanelMode>(picker);

  useEffect(() => {
    setValue(valueProps || defaultValue);
  }, [valueProps]);

  function onSelect(v) {
    setViewDate(v);
    if (picker === mergedMode) {
      let newValue: PickerValue<Dayjs>;
      if (isRange) {
        newValue = [value?.[0], value?.[1]];
        const index = v > newValue[0] ? 1 : 0;
        newValue[index] = v;
        if (
          !isEqual(generateConfig, value?.[0], newValue[0]) ||
          !isEqual(generateConfig, value?.[1], newValue[1])
        ) {
          onChangeProps(newValue);
        }
      } else {
        newValue = v;
        if (!isEqual(generateConfig, value, newValue)) {
          onChangeProps(newValue);
        }
      }
      onSelectProps(v);

      // 如果是非受控模式，内部处理
      if (valueProps === undefined) {
        setValue(newValue);
      }
    }
  }

  const onInternalPanelChange = (newMode: PanelMode, viewValue: Dayjs) => {
    setMergedMode(newMode);

    onPanelChangeProps(newMode, viewValue);
  };

  const pickerProps = {
    ...props,
    generateConfig,
    picker,
    viewDate,
    value,
    mode: mergedMode,
    onSelect,
    onViewDateChange: setViewDate,
    onPanelChange: onInternalPanelChange
  };

  let panelNode: React.ReactNode;

  switch (mergedMode) {
    case 'month': {
      panelNode = <MonthPanel<Dayjs> {...pickerProps} />;
      break;
    }
    case 'year': {
      panelNode = <YearPanel<Dayjs> {...pickerProps} />;
      break;
    }
    case 'decade': {
      panelNode = <DecadePanel<Dayjs> {...pickerProps} />;
      break;
    }
    default:
      panelNode = <DatePanel<Dayjs> {...pickerProps} />;
  }

  function renderRangeFooter() {
    let formatString = 'YYYY-MM-DD';
    if (picker === 'month') {
      formatString = 'YYYY-MM';
    }
    if (picker === 'year') {
      formatString = 'YYYY';
    }
    return (
      <div
        className={classnames(
          `${prefixCls}-footer`,
          `${prefixCls}-${picker}-footer`
        )}
      >
        <div className='date' onClick={() => setViewDate(value?.[0])}>
          {formatDate({
            date: value?.[0],
            format: formatString
          })}
        </div>
        <div className='split'>~</div>
        <div className='date' onClick={() => setViewDate(value?.[1])}>
          {formatDate({
            date: value?.[1],
            format: formatString
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={classnames(className, `${prefixCls}`)} style={style}>
      {panelNode}
      {renderExtraFooter && renderExtraFooter()}
      {isRange && renderRangeFooter()}
    </div>
  );
}

DatePanelIndex.defaultProps = {
  prefixCls: 'sty-date-panel',
  picker: 'date',
  generateConfig,
  onSelect: () => undefined,
  onChange: () => undefined,
  onPanelChange: () => undefined
};

export default DatePanelIndex;
