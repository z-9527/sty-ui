import React, { useState } from 'react';
// import { classnames } from '../_utils/index';
// import { CellPopup } from '../index';
import DatePanel from './panels';
import generateConfig from './generate';
import { DatePickerProps } from './interface';
import dayjs from 'dayjs';
import './index.less';

function DatePicker(props: DatePickerProps) {
  const { generateConfig, className, style } = props;
  const [v, setV] = useState(dayjs());
  return (
    <DatePanel
      value={v}
      onSelect={setV}
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

DatePicker.defaultProps = {
  generateConfig
};
export default DatePicker;
