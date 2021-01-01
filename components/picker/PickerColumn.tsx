import React, { useEffect, useMemo, useRef, useState } from 'react';
import { PickerColumnProps } from './index';
import { OptionObjType } from '../checkbox';
import { useTouch } from '../hooks';
import { classnames, range } from '../_utils';

const prefixCls = 'sty-picker-panel';
const DEFAULT_DURATION = 300;
const ITEM_HEIGHT = 44;

function PickerColumn(props: PickerColumnProps) {
  const { list, wrapHeight, value, onChange } = props;
  const [touch, boxRef] = useTouch<HTMLDivElement>();
  const [translateY, setTranslateY] = useState(0);
  const [duration, setDuration] = useState(DEFAULT_DURATION);
  const startTranslateY = useRef(0);
  const [activeIndex, setActiveIndex] = useState<number>();

  const newList: Array<OptionObjType> = useMemo(() => {
    if (!Array.isArray(list)) {
      return [];
    }
    const arr = list.filter(item => item); // 过滤空值
    return arr.map(option => {
      if (typeof option === 'string' || typeof option === 'number') {
        return {
          label: option,
          value: option
        };
      }
      return option;
    });
  }, [list]);

  const topBaseOffset = useMemo(() => wrapHeight / 2 - ITEM_HEIGHT / 2, [
    wrapHeight
  ]);
  useEffect(() => {
    if (activeIndex !== undefined) {
      setIndex(activeIndex);
    }
  }, [activeIndex]);

  useEffect(() => {
    const index = getIndex(value);
    setIndex(index);
  }, [value, newList]);

  function onTouchStart() {
    startTranslateY.current = translateY;
    setDuration(0);
  }
  function onTouchMove() {
    if (!touch) {
      return;
    }
    let move = startTranslateY.current + touch.moveY;

    move = range(move, -ITEM_HEIGHT * newList.length, ITEM_HEIGHT); // 限制偏移区间 下滑不能超过中线下的第一个，上滑不能超过中线上的第一个
    setTranslateY(move);
  }
  function onTouchEnd() {
    setDuration(DEFAULT_DURATION);
    const index = getIndexByOffset(translateY);
    setIndex(index);
  }

  // 主要是解决disabled选项
  function adjustIndex(index) {
    const arr = newList.slice();
    index = range(index, 0, arr.length - 1);
    for (let i = index; i < arr.length; i++) {
      if (!arr[i].disabled) {
        return i;
      }
    }
    for (let i = index - 1; i >= 0; i--) {
      if (!arr[i].disabled) {
        return i;
      }
    }
    return index;
  }

  function getIndexByOffset(offset) {
    return range(Math.round(-offset / ITEM_HEIGHT), 0, newList.length - 1);
  }

  function setIndex(index) {
    index = adjustIndex(index);
    setActiveIndex(index);
    setTranslateY(-44 * index);
    newList[index] !== undefined && onChange(newList[index].value);
  }

  function getIndex(v) {
    let index = 0;
    const findIndex = newList.findIndex(i => i.value === v);
    if (findIndex !== -1) {
      index = findIndex;
    }
    return index;
  }
  return (
    <div
      className={`${prefixCls}-column`}
      ref={boxRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <ul
        style={{
          transform: `translate3d(0,${translateY + topBaseOffset}px,0)`, // 通过3d变换开启浏览器的硬件加速
          transitionDuration: `${duration}ms`
        }}
      >
        {newList.map(item => (
          <li
            key={item.value}
            className={classnames({ disabled: item.disabled })}
            style={item.style}
          >
            {item.label}
            {item.disabled && <span style={{ fontSize: 14 }}>(禁用)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

PickerColumn.defaultProps = {
  list: [],
  onChange: () => undefined
};
export default PickerColumn;
