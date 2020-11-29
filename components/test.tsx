/* eslint-disable no-unused-vars */
import React from 'react';
// import { classnames } from '../_utils/index';
// import * as CSS from 'csstype';
import './index.less';

export interface SwitchProps {
  className?: string;
  style?: React.CSSProperties;
}

function Switch(props: SwitchProps) {
  // const { className, style } = props;
  return <div></div>;
}

Switch.defaultProps = {
  ripple: true,
  type: 'default',
  onClick: () => undefined
};
export default Switch;
