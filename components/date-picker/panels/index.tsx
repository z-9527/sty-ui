import React, { useEffect, useState } from 'react';
import MonthPanel from './MonthPanel';
import DecadePanel from './DecadePanel';
import YearPanel from './YearPanel';
import DatePanel from './DatePanel';
import { DatePanelProps, PanelMode } from '../interface';
import generateConfig from '../generate';
import { Dayjs } from 'dayjs';

function DatePanelIndex(props: DatePanelProps) {
  const {
    value: valueProps,
    defaultValue,
    generateConfig,
    picker,
    onSelect: onSelectProps,
    onPanelChange: onPanelChangeProps,
    className,
    style
  } = props;
  const [value, setValue] = useState<Dayjs>(defaultValue);
  const [viewDate, setViewDate] = useState<Dayjs>(generateConfig.getNow());
  const [mergedMode, setMergedMode] = useState<PanelMode>(picker);

  useEffect(() => {
    setViewDate(value || generateConfig.getNow());
  }, [value]);

  useEffect(() => {
    setValue(valueProps || defaultValue);
  }, [valueProps]);

  function onSelect(v) {
    if (valueProps !== undefined) {
      onSelectProps(v);
    } else {
      setValue(v);
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
  onPanelChange: () => undefined
};

export default DatePanelIndex;
