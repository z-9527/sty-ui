import React, { useLayoutEffect, useRef } from 'react';
import { classnames } from '../_utils/index';
import './index.less';

type AnimationType = {
  in?: string;
  out?: string;
};

export interface OverlayProps {
  visible?: boolean; // 是否显示弹层
  hasMask?: boolean; // 是否显示遮罩
  children?: React.ReactNode;
  animation?: AnimationType; // 配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数
  onClose?: () => unknown; // 弹层关闭时触发事件的回调函数
  afterClose?: () => unknown; // 关闭动画结束后的回调
  maskClassName?: string;
  maskStyle?: React.CSSProperties;
}

const prefixCls = 'sty-overlay';

function Overlay(props: OverlayProps) {
  const {
    visible,
    hasMask,
    children,
    animation,
    onClose,
    afterClose,
    maskClassName,
    maskStyle
  } = props;
  const contentRef = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    if (typeof visible === 'boolean') {
      if (visible) {
        show();
      } else {
        close();
      }
    }
  }, [visible]);

  function show() {
    if (animation.in) {
      contentRef.current.classList.add(animation.in);
      contentRef.current.classList.remove(animation.out);
    }
  }
  function close() {
    if (animation.out) {
      contentRef.current.classList.remove(animation.in);
      contentRef.current.classList.add(animation.out);
      contentRef.current.onanimationend = function () {
        contentRef.current.onanimationend = null;
        afterClose();
      };
    }
  }

  return (
    <div className={prefixCls}>
      {hasMask && (
        <div
          className={classnames(`${prefixCls}-mask`, maskClassName)}
          style={maskStyle}
          onClick={onClose}
        />
      )}
      <div ref={contentRef}>{children}</div>
    </div>
  );
}

Overlay.defaultProps = {
  hasMask: true,
  onClose: () => undefined,
  afterClose: () => undefined,
  animation: {}
};
export default Overlay;
