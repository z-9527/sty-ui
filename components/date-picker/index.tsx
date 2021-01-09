import React from 'react';
// import { classnames } from '../_utils/index';
import { Cell, Popup } from '../index';
import './index.less';

export interface DatePickerProps {
  className?: string;
  style?: React.CSSProperties;
}

function DatePicker(props: DatePickerProps) {
  // const { className, style } = props;
  return <div></div>;
}

DatePicker.defaultProps = {
  ripple: true,
  type: 'default',
  onClick: () => undefined
};
export default DatePicker;
