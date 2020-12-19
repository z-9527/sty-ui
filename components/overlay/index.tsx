import React, { useLayoutEffect, useRef } from 'react';
import { classnames } from '../_utils/index';
import ReactDOM from 'react-dom';
import './index.less';

type AnimationType = {
  in?: string;
  out?: string;
};

export interface OverlayProps {
  visible?: boolean; // 是否显示弹层
  hasMask?: boolean; // 是否显示遮罩
  overlayClosable?: boolean; // 点击遮罩是否可以关闭弹框
  children?: React.ReactNode;
  animation?: AnimationType; // 配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数
  onClose?: () => unknown; // 弹层关闭时触发事件的回调函数
  afterClose?: () => unknown; // 关闭动画结束后的回调
  maskClassName?: string;
  maskStyle?: React.CSSProperties;
}

Overlay.defaultProps = {
  hasMask: true,
  overlayClosable: true,
  onClose: () => undefined,
  afterClose: () => undefined,
  animation: {}
};
const prefixCls = 'sty-overlay';

function Overlay(props: OverlayProps) {
  const {
    visible,
    hasMask,
    overlayClosable,
    children,
    animation,
    onClose,
    afterClose,
    maskClassName,
    maskStyle
  } = props;
  const wrapperRef = useRef<HTMLDivElement>();
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
    if (animation?.in) {
      wrapperRef.current.style.display = 'block';
      contentRef.current.classList.add(animation.in);
      contentRef.current.classList.remove(animation.out);
    }
  }
  function close() {
    onClose();
    if (animation?.out) {
      contentRef.current.classList.remove(animation.in);
      contentRef.current.classList.add(animation.out);
      contentRef.current.onanimationend = function () {
        contentRef.current.onanimationend = null;
        afterClose();
      };
    }
  }

  return (
    <div
      className={classnames({
        [prefixCls]: true,
        open: visible
      })}
      ref={wrapperRef}
    >
      {hasMask && (
        <div
          className={classnames(`${prefixCls}-mask`, maskClassName)}
          style={maskStyle}
          onClick={() => overlayClosable && onClose()}
        />
      )}
      <div ref={contentRef}>{children}</div>
    </div>
  );
}

type ConfigUpdate<T> = T | ((p: T) => T);
type Result<T> = {
  close: () => void;
  update: (c: ConfigUpdate<T>) => void;
};

function show<T extends OverlayProps>(
  config: T,
  Element: React.ComponentType
): Result<T> {
  let currentConfig: T = { ...config, visible: true };
  const container = document.createElement('div');
  const unmount = () => {
    if (config.afterClose) {
      config.afterClose();
    }
    ReactDOM.unmountComponentAtNode(container);
    container.parentNode.removeChild(container);
  };
  document.body.appendChild(container);

  function render(c) {
    ReactDOM.render(<Element {...c} afterClose={unmount} />, container);
  }

  function close() {
    currentConfig = { ...currentConfig, visible: false };
    render(currentConfig);
  }
  function update(configUpdate: ConfigUpdate<T>) {
    if (typeof configUpdate === 'function') {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = {
        ...currentConfig,
        ...configUpdate
      };
    }
    render(currentConfig);
  }

  render(config);

  return {
    close,
    update
  };
}

Overlay.show = show;
export default Overlay;
