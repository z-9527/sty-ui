import DatePicker from './DatePicker';
import DatePanelIndex from './panels';

type MergedDatePickerType = typeof DatePicker & {
  DatePanel: typeof DatePanelIndex;
};

const MergedDatePicker = DatePicker as MergedDatePickerType;
MergedDatePicker.DatePanel = DatePanelIndex;

export default MergedDatePicker;
