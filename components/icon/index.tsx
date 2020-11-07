import React, { CSSProperties } from 'react';
import { classnames } from '@/components/_utils/index';
import './index.less';
export interface IconProps {
  size?: number | string;
  color?: string;
  type?: string;
  className?: string;
  style?: CSSProperties;
}

function Icon(props: IconProps) {
  const { className, style, size, color, type } = props;
  return (
    <i
      className={classnames(className, 'sty-icon', `sty-icon-${type}`)}
      style={{ ...style, fontSize: size, color: color }}
    />
  );
}

export default Icon;
