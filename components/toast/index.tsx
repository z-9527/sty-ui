import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { classnames } from '../_utils/index';
import { Loading, Overlay } from '../index';
import { OverlayProps } from '../overlay';
import './index.less';
import Icon from '../icon';

export interface ToastProps extends OverlayProps {
  type?: 'info' | 'success' | 'fail' | 'loading';
  duration?: number; // 显示时间
  content?: React.ReactNode;
  icon?: React.ReactNode; // 自定义图标
  className?: string;
  style?: React.CSSProperties;
}

function Toast(props: ToastProps) {
  const { type, duration, content, icon, className, style, ...other } = props;
  const [visible, setVisible] = useState(true);
  const box = useRef<HTMLDivElement>();

  useEffect(() => {
    setVisible(true);
    if (duration) {
      setTimeout(() => {
        setVisible(false);
        props.onClose();
      }, duration * 1000);
    }
    return () => {
      setVisible(false);
      props.onClose();
    };
  }, []);
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
    <Overlay
      {...other}
      visible={visible}
      onClose={() => setVisible(false)}
      hasMask={false}
      animation={{ in: 'fadeIn', out: 'fadeOut' }}
    >
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
    </Overlay>
  );
}

Toast.defaultProps = {
  duration: 2.5,
  type: 'info',
  onClose: () => undefined
};

// 返回关闭函数
function notice(config: ToastProps) {
  const container = document.createElement('div');
  const unmount = () => {
    if (config.afterClose) {
      config.afterClose();
    }
    ReactDOM.unmountComponentAtNode(container);
    container.parentNode.removeChild(container);
  };
  document.body.appendChild(container);
  ReactDOM.render(<Toast {...config} afterClose={unmount} />, container);
  // return onClose;
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
