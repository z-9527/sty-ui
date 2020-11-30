import React, { CSSProperties } from 'react';
import { classnames } from '../_utils/index';
import * as CSS from 'csstype';
import './index.less';

export interface IconProps {
  size?: number | string;
  color?: CSS.Property.Color;
  type?: string;
  onClick?: () => unknown;
  className?: string;
  style?: CSSProperties;
}

function Icon(props: IconProps) {
  const { className, style, size, color, type, onClick } = props;
  return (
    <i
      className={classnames(className, 'sty-icon', `sty-icon-${type}`)}
      style={{ ...style, fontSize: size, color: color }}
      onClick={onClick}
    />
  );
}

Icon.defaultProps = {
  onClick: () => undefined
};

export default Icon;
