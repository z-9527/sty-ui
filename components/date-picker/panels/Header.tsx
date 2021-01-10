import React from 'react';

export interface HeaderProps {
  prefixCls?: string;
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  superPrevIcon?: React.ReactNode;
  superNextIcon?: React.ReactNode;

  onPrev?: () => unknown;
  onNext?: () => unknown;
  onSuperPrev?: () => unknown;
  onSuperNext?: () => unknown;

  children?: React.ReactNode;
}

function Header(props: HeaderProps) {
  const {
    prefixCls: prefixClsProps,
    prevIcon,
    nextIcon,
    superPrevIcon,
    superNextIcon,
    onPrev,
    onNext,
    onSuperPrev,
    onSuperNext,
    children
  } = props;
  const prefixCls = `${prefixClsProps}-header`;
  return (
    <div className={prefixCls}>
      {onSuperPrev && (
        <button
          type='button'
          onClick={onSuperPrev}
          tabIndex={-1}
          className={`${prefixCls}-super-prev-btn`}
        >
          {superPrevIcon}
        </button>
      )}
      {onPrev && (
        <button
          type='button'
          onClick={onPrev}
          tabIndex={-1}
          className={`${prefixCls}-prev-btn`}
        >
          {prevIcon}
        </button>
      )}
      <div className={`${prefixCls}-view`}>{children}</div>
      {onNext && (
        <button
          type='button'
          onClick={onNext}
          tabIndex={-1}
          className={`${prefixCls}-next-btn`}
        >
          {nextIcon}
        </button>
      )}
      {onSuperNext && (
        <button
          type='button'
          onClick={onSuperNext}
          tabIndex={-1}
          className={`${prefixCls}-super-next-btn`}
        >
          {superNextIcon}
        </button>
      )}
    </div>
  );
}
Header.defaultProps = {
  prevIcon: '\u2039',
  nextIcon: '\u203A',
  superPrevIcon: '\u00AB',
  superNextIcon: '\u00BB'
};

export default Header;
