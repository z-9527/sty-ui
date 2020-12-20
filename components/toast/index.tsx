import React, { useEffect, useRef, useState } from 'react';
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
  const {
    visible: visibleProps,
    type,
    duration,
    content,
    icon,
    className,
    style,
    ...other
  } = props;
  const [visible, setVisible] = useState(true);
  const box = useRef<HTMLDivElement>();

  useEffect(() => {
    setVisible(true);
    if (duration) {
      setTimeout(() => {
        props.onClose();
        setVisible(false);
      }, duration * 1000);
    }
  }, []);

  useEffect(() => {
    if (typeof visibleProps === 'boolean') {
      setVisible(visibleProps);
    }
  }, [visibleProps]);
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
  duration: 2,
  type: 'info',
  onClose: () => undefined
};

// 返回关闭函数和更新函数
function notice(config: ToastProps) {
  return Overlay.show(config, Toast);
}

export default {
  info(config: ToastProps) {
    return notice({
      ...config,
      type: 'info'
    });
  },
  loading(config: ToastProps) {
    return notice({
      ...config,
      type: 'loading'
    });
  },
  fail(config: ToastProps) {
    return notice({
      ...config,
      type: 'fail'
    });
  },
  success(config: ToastProps) {
    return notice({
      ...config,
      type: 'success'
    });
  }
};
