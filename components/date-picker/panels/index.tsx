import React, { useEffect, useState } from 'react';
import MonthPanel from './MonthPanel';
import DecadePanel from './DecadePanel';
import YearPanel from './YearPanel';
import DatePanel from './DatePanel';
import { DatePanelProps, PanelMode } from '../interface';

function DatePanelIndex<DateType>(props: DatePanelProps<DateType>) {
  const {
    defaultValue,
    generateConfig,
    picker,
    onPanelChange,
    className,
    style
  } = props;
  const [value, setValue] = useState<DateType>(defaultValue);
  const [viewDate, setViewDate] = useState<DateType>(generateConfig.getNow());
  const [mergedMode, setMergedMode] = useState<PanelMode>(picker);

  useEffect(() => {
    setViewDate(value || generateConfig.getNow());
  }, [value]);
  function onSelect(v) {
    setValue(v);
  }

  const onInternalPanelChange = (newMode: PanelMode, viewValue: DateType) => {
    setMergedMode(newMode);

    onPanelChange(newMode, viewValue);
  };

  const pickerProps = {
    ...props,
    picker,
    viewDate,
    value,
    onSelect,
    onViewDateChange: setViewDate,
    onPanelChange: onInternalPanelChange
  };

  let panelNode: React.ReactNode;

  switch (mergedMode) {
    case 'month': {
      panelNode = <MonthPanel<DateType> {...pickerProps} />;
      break;
    }
    case 'year': {
      panelNode = <YearPanel<DateType> {...pickerProps} />;
      break;
    }
    case 'decade': {
      panelNode = <DecadePanel<DateType> {...pickerProps} />;
      break;
    }
    default:
      panelNode = <DatePanel<DateType> {...pickerProps} />;
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
  onPanelChange: () => undefined
};

export default DatePanelIndex;
