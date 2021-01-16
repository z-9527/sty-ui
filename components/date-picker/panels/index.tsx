import React, { useEffect, useState } from 'react';
import MonthPanel from './MonthPanel';
import DecadePanel from './DecadePanel';
import YearPanel from './YearPanel';
import DatePanel from './DatePanel';
import { DatePanelProps, PanelMode, PickerValue } from '../interface';
import generateConfig from '../generate';
import { Dayjs } from 'dayjs';
import { isEqual } from '../_utils/dateUtils';

function DatePanelIndex(props: DatePanelProps) {
  const {
    value: valueProps,
    defaultValue,
    generateConfig,
    picker,
    isRange,
    onSelect: onSelectProps,
    onChange: onChangeProps,
    onPanelChange: onPanelChangeProps,
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
        newValue = value?.slice?.() || [];
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

  return (
    <div className={className} style={style}>
      {panelNode}
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
