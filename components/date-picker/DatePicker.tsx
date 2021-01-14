import React, { useState } from 'react';
// import { classnames } from '../_utils/index';
// import { CellPopup } from '../index';
import DatePanel from './panels';
import { DatePickerProps } from './interface';
import dayjs from 'dayjs';
import './index.less';

function DatePicker(props: DatePickerProps) {
  const { className, style } = props;
  const [v, setV] = useState(dayjs());
  return (
    <DatePanel
      value={v}
      onSelect={setV}
      picker='date'
      onPanelChange={console.log}
      disabledDate={date => {
        return date <= dayjs().endOf('day');
      }}
    />
  );
  // return (
  //   <CellPopup className={className} style={style}>
  //     <DatePanel />
  //   </CellPopup>
  // );
}

export default DatePicker;
