import React, { useState } from 'react';
// import { classnames } from '../_utils/index';
// import { CellPopup } from '../index';
import DatePanel from './panels';
import { DatePickerProps, PickerValue } from './interface';
import dayjs, { Dayjs } from 'dayjs';
import './index.less';
function DatePicker(props: DatePickerProps) {
  // const { className, style } = props;
  const [v, setV] = useState<PickerValue<Dayjs>>([dayjs('2019-01-02')]);
  // const [v, setV] = useState(dayjs('2019-01-02'));
  return (
    <DatePanel
      value={v}
      onChange={v => {
        console.log('v: ', v);
        setV(v);
      }}
      isRange
      picker='date'
      onPanelChange={console.log}
      // disabledDate={date => {
      //   return date <= dayjs().endOf('day');
      // }}
    />
  );
  // return (
  //   <CellPopup className={className} style={style}>
  //     <DatePanel />
  //   </CellPopup>
  // );
}

export default DatePicker;
