import React from 'react';
import { classnames } from '../_utils/index';
import { Icon, Ripple } from '../index';
import './index.less';

export interface CellProps {
  title?: React.ReactNode; // 左侧标题
  label?: React.ReactNode; // 描述信息
  clickable?: boolean; // 是否开启点击反馈
  arrow?: 'left' | 'up' | 'right' | 'down' | 'none'; // 箭头方向
  center?: boolean; // 内容是否居中
  ripple?: boolean; // 是否开启水波纹效果
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
function Cell(props: CellProps) {
  const {
    title,
    label,
    clickable,
    arrow,
    center,
    ripple,
    children,
    className,
    style
  } = props;

  function onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    props.onClick(event);
  }

  return (
    <div
      className={classnames({
        'sty-cell': true,
        [className]: className,
        'sty-cell-center': center,
        'sty-cell-clickable': clickable
      })}
      style={style}
      onClick={onClick}
    >
      <div className={'sty-cell-title'}>
        <div>{title}</div>
        {label !== undefined && <div className={'sty-cell-label'}>{label}</div>}
      </div>
      <div className={'sty-cell-value sty-ellipsis'}>{children}</div>
      {arrow !== 'none' && (
        <Icon className='arrow-icon' type={`arrow-${arrow}`} />
      )}
      {ripple && <Ripple className={'sty-cell-ripple'} />}
    </div>
  );
}

Cell.defaultProps = {
  clickable: false,
  arrow: 'none',
  center: false,
  ripple: false,
  onClick: () => undefined
};

export default Cell;
