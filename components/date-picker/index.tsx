import React from 'react';
import DatePicker from './DatePicker';
import DatePanelIndex from './panels';
import { DatePickerProps, DatePanelProps } from './interface';

type MergedDatePickerType = typeof DatePicker & {
  DatePanel: typeof DatePanelIndex;
  RangePicker: typeof DatePicker;
  RangePanel: typeof DatePanelIndex;
};

function RangePanel(props: DatePanelProps) {
  return <DatePanelIndex {...props} isRange />;
}
RangePanel.defaultProps = DatePanelIndex.defaultProps;

const MergedDatePicker = DatePicker as MergedDatePickerType;
MergedDatePicker.DatePanel = DatePanelIndex;
MergedDatePicker.RangePicker = (props: DatePickerProps) => (
  <DatePicker {...props} isRange />
);
MergedDatePicker.RangePanel = RangePanel;

export default MergedDatePicker;
