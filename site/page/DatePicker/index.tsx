import React from 'react';
import { DatePicker } from '@/components/index';
import dayjs from 'dayjs';
const { DatePanel, RangePicker, RangePanel } = DatePicker;

function DatePickerDemo() {
  return (
    <div style={{ paddingBottom: 100 }}>
      <div className='demo-block__title'>基础用法</div>
      <DatePicker>选择日期</DatePicker>
      <DatePicker picker='month'>选择月份</DatePicker>
      <DatePicker picker='year'>选择年</DatePicker>
      <DatePicker
        picker='date'
        disabledDate={date => {
          return (
            dayjs().subtract(1, 'day').format('YYYY-MM-DD') ===
            date.format('YYYY-MM-DD')
          );
        }}
      >
        禁用前一天
      </DatePicker>
      <div className='demo-block__title'>范围选择器</div>
      <RangePicker>选择日期</RangePicker>
      <RangePicker picker='month'>选择月份</RangePicker>
      <RangePicker picker='year'>选择年</RangePicker>

      <div className='demo-block__title'>面板用法</div>
      <DatePanel />
      <div className='demo-block__title'>范围选择面板用法</div>
      <RangePanel />
    </div>
  );
}
export default DatePickerDemo;
