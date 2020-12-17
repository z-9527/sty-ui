import React from 'react';
import { classnames } from '../_utils/index';
import { CSSTransition } from 'react-transition-group';
import { Icon } from '../index';

import './index.less';

export interface PopupProps {
  overlay?: boolean; // 是否显示遮罩
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center'; // 弹出层位置
  visible?: boolean; // 控制隐藏和显示
  overlayClosable?: boolean; // 点击遮罩是否可以关闭弹框
  round?: boolean; // 是否是圆角
  closable?: boolean; // 是否显示关闭icon
  duration?: number; // 动画时长，单位毫秒
  transitionName?: string; // 主体过渡动画名称
  children?: React.ReactNode;
  onClose?: () => unknown;
  className?: string;
  style?: React.CSSProperties;
}

Popup.defaultProps = {
  overlay: true,
  position: 'center',
  visible: false,
  overlayClosable: true,
  round: false,
  closable: false,
  duration: 300,
  onClose: () => undefined
};

function Popup(props: PopupProps) {
  const {
    overlay,
    position,
    visible,
    overlayClosable,
    round,
    closable,
    duration,
    transitionName: transitionNameProps,
    children,
    className,
    style
  } = props;

  function onOverlayClick() {
    if (overlayClosable) {
      props.onClose();
    }
  }
  let transitionName = transitionNameProps;

  if (!transitionNameProps) {
    transitionName =
      position === 'center' ? 'sty-fade' : `sty-slide-${position}`;
  }

  return (
    <>
      {overlay && (
        <CSSTransition
          in={visible}
          timeout={duration}
          classNames={'sty-fade'}
          unmountOnExit
        >
          <div className={'sty-popup-overlay'} onClick={onOverlayClick} />
        </CSSTransition>
      )}
      <CSSTransition
        in={visible}
        timeout={duration}
        classNames={transitionName}
        unmountOnExit
      >
        <div
          className={classnames({
            [className]: className,
            'sty-popup': true,
            [`sty-popup-${position}`]: true,
            'sty-popup-round': round
          })}
          style={style}
        >
          {closable && (
            <Icon onClick={props.onClose} className='close-icon' type='cross' />
          )}
          {children}
        </div>
      </CSSTransition>
    </>
  );
}

export default Popup;
