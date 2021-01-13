import React from 'react';
// import { classnames } from '../_utils/index';
// import { CellPopup } from '../index';
import DatePanel from './panels';
import generateConfig from './generate';
import { DatePickerProps } from './interface';
import './index.less';

function DatePicker<DateType>(props: DatePickerProps<DateType>) {
  // const { className, style } = props;
  return (
    <DatePanel
      generateConfig={generateConfig}
      picker='date'
      onPanelChange={console.log}
    />
  );
  // return (
  //   <CellPopup className={className} style={style}>
  //     <DatePanel />
  //   </CellPopup>
  // );
}

DatePicker.defaultProps = {};
export default DatePicker;
