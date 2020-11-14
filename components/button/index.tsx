import React from 'react';
import { Ripple, Icon } from '../index';
import { classnames } from '../_utils/index';
import './index.less';

const Loading = () => <div />;

interface IProps {
  disabled?: boolean;
  inline?: boolean;
  loading?: boolean;
  ripple?: boolean;
  round?: boolean;
  icon?: string;
  type?: 'primary' | 'warning' | 'ghost' | 'default';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function Button(props: IProps) {
  const {
    disabled,
    inline,
    loading,
    ripple,
    round,
    icon,
    type,
    className,
    style,
    children,
    onClick
  } = props;

  const cls = {
    'sty-button': true,
    [className]: className,
    [`sty-button-${type}`]: type,
    'sty-button-disabled': disabled,
    'sty-button-inline': inline,
    'sty-button-round': round
  };
  const iconEl = loading ? (
    <Loading size={24} className={'sty-button-loading'} />
  ) : (
    icon
  );
  return (
    <div className={classnames(cls)} style={style} onClick={onClick}>
      {!disabled && !loading && ripple && (
        <Ripple className={'sty-button-ripple'} />
      )}
      {typeof iconEl === 'string' ? (
        <Icon className={'sty-button-icon'} type={icon} />
      ) : (
        iconEl
      )}
      {children && <span className={'sty-button-text'}>{children}</span>}
    </div>
  );
}

Button.defaultProps = {
  ripple: true,
  type: 'default',
  onClick: () => undefined
};

export default Button;
