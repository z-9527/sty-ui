import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { classnames, range } from '../_utils/index';
import { useTouch } from '../hooks';
import './index.less';

const prefixCls = 'sty-swipe';
export interface SwipeProps {
  height?: number; // 滑块高度
  width?: number; // 滑块宽度
  autoplay?: number | boolean; // 自动播放间隔时长
  duration?: number; // 动画时长
  defaultIndex?: number; // 初始索引值
  loop?: boolean; // 是否开启无限循环
  vertical?: boolean; // 是否纵向滚动
  showDots?: boolean; // 是否显示指示器
  children?: React.ReactNode;
  onChange?: (i: number) => unknown; // 活动页变化时的回调函数
  className?: string;
  style?: React.CSSProperties;
}

function Swipe(props: SwipeProps) {
  const {
    height: heightProps,
    width: widthProps,
    autoplay: autoplayProps,
    duration,
    defaultIndex,
    loop: loopProps,
    vertical,
    showDots,
    children,
    onChange,
    className,
    style
  } = props;
  const count = useMemo(() => React.Children.count(children), [children]); // 轮播图个数
  const loop = loopProps && count > 1;
  const [touch, boxRef] = useTouch<HTMLDivElement>();
  const height = boxRef.current && boxRef.current.offsetHeight;
  const width = boxRef.current && boxRef.current.offsetWidth;
  const size = vertical ? height : width;
  const firstChild = useRef<HTMLElement>();
  const lastChild = useRef<HTMLDivElement>();
  const timer = useRef<number>();

  const swiping = useRef(false); // 是否正在滑动
  const [activeIndex, setActiveIndex] = useState(adjustIndex(defaultIndex));
  const [move, setMove] = useState(0); // 滑动距离
  const startPosition = useRef(0); // 滑动起始位置

  useEffect(() => {
    autoplay();
    return () => {
      stopAutoplay();
    };
  }, []);

  useEffect(() => {
    setMove(-size * activeIndex);
    onChange(activeIndex);
  }, [activeIndex, size]);

  function adjustIndex(index) {
    if (typeof index !== 'number') {
      return 0;
    }
    if (loop || (autoplayProps && !swiping.current)) {
      return (index + count) % count;
    } else {
      return range(index, 0, count - 1);
    }
  }

  const stopAutoplay = () => {
    clearTimeout(timer.current);
  };
  function autoplay() {
    let interval = 0;
    if (typeof autoplayProps === 'boolean' && autoplayProps) {
      interval = 3000;
    }
    if (typeof autoplayProps === 'number') {
      interval = autoplayProps;
    }
    if (interval > 0 && count > 1) {
      stopAutoplay();
      timer.current = window.setTimeout(() => {
        setActiveIndex(pre => adjustIndex(pre + 1));
        autoplay();
      }, interval);
    }
  }

  function renderItem() {
    return React.Children.map(children, (child: React.ReactElement, index) => {
      const childProps = {
        className: classnames(child.props.className, `${prefixCls}-item`),
        ref: null
      };
      if (loop) {
        if (index === 0) {
          childProps.ref = firstChild;
        }
        if (index === count - 1) {
          childProps.ref = lastChild;
        }
      }
      return React.cloneElement(child, childProps);
    });
  }

  const renderDots = useCallback(() => {
    return React.Children.map(children, (child: React.ReactElement, index) => {
      return (
        <span
          className={classnames({
            [`${prefixCls}-dot`]: true,
            active: index === activeIndex
          })}
        />
      );
    });
  }, [activeIndex, children]);

  function onTouchStart() {
    swiping.current = true;
    startPosition.current = move;
    stopAutoplay();
  }

  function onTouchMove() {
    if (!swiping.current) {
      return;
    }
    const offset =
      startPosition.current + (vertical ? touch.moveY : touch.moveX);
    setMove(offset);
  }

  function onTouchEnd() {
    if (!swiping.current) {
      return;
    }
    const moveDirection = vertical ? 'moveY' : 'moveX';

    const shouldSwipe = Math.abs(touch[moveDirection] / size) > 0.25; // 移动距离百分大于0.25时切换下一张,否则还原
    let index = activeIndex;
    if (shouldSwipe) {
      index = adjustIndex(
        activeIndex + (1 * touch[moveDirection] > 0 ? -1 : 1)
      );
      setActiveIndex(index);
    }
    setMove(-size * index);
    swiping.current = false;
    autoplay();
  }

  return (
    <div
      ref={boxRef}
      className={classnames({
        [`${prefixCls}-wrapper`]: true,
        [className]: className,
        [`${prefixCls}-wrapper_vertical`]: vertical
      })}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ ...style, height: heightProps, width: widthProps }}
    >
      <div
        className={prefixCls}
        style={{
          transform: `translate${vertical ? 'Y' : 'X'}(${move}px)`,
          transitionDuration: `${swiping.current ? 0 : duration}ms`
        }}
      >
        {renderItem()}
      </div>
      {showDots && (
        <div className={`${prefixCls}-dots-box`}>{renderDots()}</div>
      )}
    </div>
  );
}

Swipe.defaultProps = {
  autoplay: 3000,
  duration: 500,
  defaultIndex: 0,
  loop: false,
  vertical: false,
  showDots: true,
  onChange: () => undefined
};
export default Swipe;
