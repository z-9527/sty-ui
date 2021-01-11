import React, { useEffect, useState } from 'react';
import MonthPanel from './MonthPanel';
import DecadePanel from './DecadePanel';
import YearPanel from './YearPanel';
import { DatePanelProps } from '../interface';

function DatePanel<DateType>(props: DatePanelProps<DateType>) {
  const { defaultValue, generateConfig } = props;
  const [value, setValue] = useState<DateType>(defaultValue);
  const [viewDate, setViewDate] = useState<DateType>(generateConfig.getNow());
  console.log('viewDate: ', viewDate);

  useEffect(() => {
    setViewDate(value || generateConfig.getNow());
  }, [value]);
  function onSelect(v) {
    setValue(v);
  }

  const a = {
    ...props,
    viewDate,
    value,
    onSelect,
    onViewDateChange: setViewDate,
    onPanelChange: () => undefined
  };

  return (
    <div>
      <MonthPanel
        {...props}
        viewDate={viewDate}
        value={value}
        onSelect={onSelect}
        onViewDateChange={setViewDate}
      />
      <DecadePanel {...a} />
      <YearPanel {...a} />
    </div>
  );
}

DatePanel.defaultProps = {
  prefixCls: 'sty-date-panel'
};

export default DatePanel;
