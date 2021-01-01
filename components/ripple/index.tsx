import React, { useRef } from 'react';
import { classnames, range } from '../_utils/index';
import * as CSS from 'csstype';
import './index.less';

/**
 * 水波纹效果
 * 原理：在鼠标点击的位置生成一个div，div进行扩散动画，动画结束后删除div。
 */
export interface RippleProps {
  center?: boolean; // 是否中心点触发波纹
  color?: CSS.Property.Color; // 波纹颜色
  className?: string;
  style?: React.CSSProperties;
}

interface IPoint {
  top: number;
  left: number;
  width: number;
  height: number;
}

function Ripple(props: RippleProps) {
  const { center, color, style, className } = props;
  const rippleBox = useRef<HTMLDivElement>();
  const shadowDiv = useRef<HTMLDivElement>();
  const point = useRef<IPoint>();
  const timer = useRef<number>();

  function onTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    shadowDiv.current &&
      shadowDiv.current.parentNode &&
      shadowDiv.current.parentNode.removeChild(shadowDiv.current);
    clearTimeout(timer.current);

    point.current = getPoint(event.touches[0]);
    shadowDiv.current = createShadowDiv(point.current);
    rippleBox.current.appendChild(shadowDiv.current);
  }

  function onTouchEnd() {
    const { width, height } = point.current;
    const max = Math.max(height, width);
    const duration = range(max / 400, 0.6, 2); // [0.6,2]

    shadowDiv.current.style.transition = `transform ${duration}s ease-in-out 0s, opacity ${
      duration - 0.3
    }s linear 0s`;
    shadowDiv.current.style.transform = `scale(${max / 5})`;
    shadowDiv.current.style.opacity = '0';

    timer.current = window.setTimeout(() => {
      shadowDiv.current &&
        shadowDiv.current.parentNode &&
        shadowDiv.current.parentNode.removeChild(shadowDiv.current);
    }, duration * 1000);
  }
  // 创建阴影div
  function createShadowDiv(position: IPoint) {
    const div = document.createElement('div');
    div.classList.add('sty-ripple-shadow');

    div.style.cssText = `
      top:${position.top}px;
      left:${position.left}px;
      transition:transform 0.25s ease-in-out 0s;
      transform:scale(1.4);
      background-color:${color}
    `;
    return div;
  }

  // 获取触摸点
  function getPoint(touch: React.Touch): IPoint {
    const rippleBoxRect = rippleBox.current.getBoundingClientRect();
    if (center) {
      return {
        top: rippleBoxRect.height / 2,
        left: rippleBoxRect.width / 2,
        width: rippleBoxRect.width,
        height: rippleBoxRect.height
      };
    }
    return {
      top: touch.clientY - rippleBoxRect.top,
      left: touch.clientX - rippleBoxRect.left,
      width: rippleBoxRect.width,
      height: rippleBoxRect.height
    };
  }
  return (
    <div
      ref={rippleBox}
      style={{ ...style }}
      className={classnames('sty-ripple', className)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    ></div>
  );
}

export default Ripple;
