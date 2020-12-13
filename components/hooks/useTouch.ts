import React, { useEffect, useRef, useState } from 'react';

type Touch = {
  startX?: number; // 起始时的相对文档x坐标
  startY?: number; // 起始时的相对文档y坐标
  direction?: 'vertical' | 'horizontal'; // 移动方向
  moveX?: number; // 水平移动距离
  moveY?: number; // 垂直移动距离
};

function useTouch<T extends HTMLElement>(
  disabled = false
): [Touch, React.MutableRefObject<T>] {
  const DOMRef = useRef<T>();
  const touchRef = useRef<Touch>(null);
  const [touch, setTouch] = useState(null);

  useEffect(() => {
    const DOM = DOMRef.current;
    if (DOM) {
      DOM.addEventListener('touchstart', onTouchStart);
      DOM.addEventListener('touchmove', onTouchMove);
      DOM.addEventListener('touchend', onTouchEnd);
      return () => {
        DOM.removeEventListener('touchstart', onTouchStart);
        DOM.removeEventListener('touchmove', onTouchMove);
        DOM.removeEventListener('touchend', onTouchEnd);
      };
    }
  }, []);

  useEffect(() => {
    touchRef.current = touch;
  }, [touch]);

  function onTouchStart(event: TouchEvent) {
    if (disabled) {
      return;
    }
    const touches = event.touches;
    setTouch({
      startX: touches[0].pageX,
      startY: touches[0].pageY
    });
  }
  function onTouchMove(event: TouchEvent) {
    if (!touchRef.current || disabled) {
      return;
    }
    const touches = event.touches;
    const moveX = touches[0].pageX - touchRef.current.startX;
    const moveY = touches[0].pageY - touchRef.current.startY;
    setTouch({
      ...touchRef.current,
      moveX,
      moveY,
      direction: Math.abs(moveX) > Math.abs(moveY) ? 'horizontal' : 'vertical'
    });
  }
  function onTouchEnd() {
    setTouch(null);
  }

  return [touch, DOMRef];
}

export default useTouch;
