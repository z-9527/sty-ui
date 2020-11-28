import React from 'react';
import * as CSS from 'csstype';
import { classnames } from '../_utils/index';
import './index.less';

function LoadingIcon(type) {
  if (type === 'spinner') {
    const Spin = [];
    for (let i = 0; i < 12; i++) {
      Spin.push(<i key={i} />);
    }
    return Spin;
  }
  return (
    <svg viewBox='25 25 50 50'>
      <circle cx='50' cy='50' r='20' fill='none' />
    </svg>
  );
}

interface LoadingProps {
  type?: 'spinner' | 'circular';
  size?: number;
  color?: CSS.Property.Color;
  vertical?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

function Loading(props: LoadingProps) {
  const { type, size, color, vertical, className, children, ...other } = props;

  const style: React.CSSProperties = { color };
  if (size) {
    style.width = `${size}px`;
    style.height = `${size}px`;
  }
  return (
    <div
      className={classnames({
        'sty-loading': true,
        [className]: className,
        'sty-loading-vertical': vertical
      })}
      {...other}
    >
      <span
        className={classnames({
          'sty-loading-spinner': true,
          [`sty-loading-type-${type}`]: type
        })}
        style={style}
      >
        {LoadingIcon(type)}
      </span>
      {children && <span className={'sty-loading-text'}>{children}</span>}
    </div>
  );
}

Loading.defaultProps = {
  type: 'circular'
};

export default Loading;
