import React, { useMemo } from 'react';
import { classnames } from '../_utils/index';
import { Icon, Overlay } from '../index';
import { OverlayProps } from '../overlay';

import './index.less';
export type PopupPosition = 'top' | 'bottom' | 'left' | 'right' | 'center';
export interface PopupProps extends OverlayProps {
  position?: PopupPosition; // 弹出层位置
  round?: boolean; // 是否是圆角
  closable?: boolean; // 是否显示关闭icon
  className?: string;
  style?: React.CSSProperties;
}

Popup.defaultProps = {
  position: 'center',
  round: false,
  closable: false
};

function Popup(props: PopupProps) {
  const {
    position,
    round,
    closable,
    className,
    style,
    animation: animationProps,
    children,
    ...other
  } = props;

  const animation = useMemo(() => {
    if (animationProps) {
      return animationProps;
    }
    if (position === 'center') {
      return;
    }
    return {
      in: `slide_${position}In`,
      out: `slide_${position}Out`
    };
  }, [animationProps, position]);

  return (
    <Overlay {...other} animation={animation}>
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
    </Overlay>
  );
}

export default Popup;
