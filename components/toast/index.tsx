import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { classnames } from '../_utils/index';
import { Loading } from '../index';
import './index.less';
import Icon from '../icon';

export interface ToastProps {
  type?: 'info' | 'success' | 'fail' | 'loading';
  duration?: number; // 显示时间
  content?: React.ReactNode;
  icon?: React.ReactNode; // 自定义图标
  onClose?: () => unknown; // 关闭后的回调
  className?: string;
  style?: React.CSSProperties;
}

function Toast(props: ToastProps) {
  const { type, duration, content, icon, className, style } = props;
  const timer = useRef<number>();
  const box = useRef<HTMLDivElement>();

  useEffect(() => {
    startTimer();
    return () => {
      closeTimer();
    };
  }, []);

  function startTimer() {
    if (duration) {
      timer.current = window.setTimeout(() => {
        closeTimer();
      }, duration * 1000);
    }
  }

  function closeTimer() {
    if (box.current) {
      box.current.classList.add('fadeOut');
      setTimeout(() => {
        props.onClose();
        clearTimeout(timer.current);
      }, 500);
    }
  }

  function renderIcon() {
    if (type === 'info' && !icon) {
      return;
    }
    if (type === 'loading') {
      return <Loading size={36} />;
    }
    if (typeof icon === 'string') {
      return <Icon type={icon} size={36} />;
    } else if (icon) {
      return icon;
    }
    return <Icon type={type} size={36} />;
  }

  return (
    <div className={'sty-toast-mask'}>
      <div
        ref={box}
        className={classnames({
          [className]: className,
          'sty-toast': true,
          'sty-toast-text': true,
          'sty-toast-icon': icon || type !== 'info'
        })}
        style={style}
      >
        {renderIcon()}
        <div className={'sty-toast-text-info'}>{content}</div>
      </div>
    </div>
  );
}

Toast.defaultProps = {
  duration: 2.5,
  type: 'info',
  onClose: () => undefined
};

// 返回关闭函数
function notice(config: ToastProps) {
  const div = document.createElement('div');
  div.className = 'sty-toast-box';
  document.body.appendChild(div);
  function onClose() {
    config.onClose && config.onClose();
    ReactDOM.unmountComponentAtNode(div);
    document.body.contains(div) && document.body.removeChild(div);
  }
  ReactDOM.render(<Toast {...config} onClose={onClose} />, div);
  return onClose;
}

export default {
  info({ content, duration, icon, onClose, className, style }: ToastProps) {
    return notice({
      content,
      duration,
      icon,
      onClose,
      type: 'info',
      className,
      style
    });
  },
  loading({ content, duration, icon, onClose, className, style }: ToastProps) {
    return notice({
      content,
      duration,
      icon,
      onClose,
      type: 'loading',
      className,
      style
    });
  },
  fail({ content, duration, icon, onClose, className, style }: ToastProps) {
    return notice({
      content,
      duration,
      icon,
      onClose,
      type: 'fail',
      className,
      style
    });
  },
  success({ content, duration, icon, onClose, className, style }: ToastProps) {
    return notice({
      content,
      duration,
      icon,
      onClose,
      type: 'success',
      className,
      style
    });
  }
};
