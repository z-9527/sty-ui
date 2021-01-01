import React, { useEffect, useRef, useState } from 'react';
import { classnames, range } from '../_utils/index';
import * as CSS from 'csstype';
import './index.less';

export type keyType = string | number;
export interface TabsProps<T> {
  activeKey?: T; // 当前激活的面板key,可以是索引，也可以是tabPane的name
  defaultActiveKey?: T; // 默认激活的面板key
  lineColor?: CSS.Property.Color; // 下划线颜色
  tabBarActiveTextColor?: CSS.Property.Color; // // 激活tab文字颜色
  tabBarInactiveTextColor?: CSS.Property.Color; // // 非激活tab文字颜色
  tabBarPosition?: 'right' | 'left' | 'top' | 'bottom'; // 垂直布局时一定要给高度
  animated?: boolean; // 是否开启切换动画
  forceRender?: boolean; // 隐藏时是否渲染DOM
  children?: React.ReactNode;
  onChange?: ({ name: T, index: number }) => unknown; // 面板点击切换回调
  contentClassName?: string; // 内容盒子样式名
  contentStyle?: React.CSSProperties; // 内容盒子样式
  className?: string;
  style?: React.CSSProperties;
}
const prefixCls = 'sty-tabs';

function Tabs<T>(props: TabsProps<T>) {
  const {
    activeKey,
    defaultActiveKey,
    lineColor,
    tabBarActiveTextColor,
    tabBarInactiveTextColor,
    tabBarPosition,
    animated,
    forceRender,
    children,
    contentClassName,
    contentStyle,
    className,
    style
  } = props;
  const [activeIndex, setActiveIndex] = useState<number>();
  const tabBar = useRef<HTMLDivElement>();
  const line = useRef<HTMLDivElement>();
  const tabsContent = useRef<HTMLDivElement>();
  const isVertical = ['right', 'left'].includes(tabBarPosition);
  const oldIndexRef = useRef<number>();

  useEffect(() => {
    const index = _getValidIndex(getActiveIndex(defaultActiveKey));
    setIndex(index);
  }, []);

  useEffect(() => {
    if (activeIndex !== undefined) {
      const index = _getValidIndex(getActiveIndex(activeKey));
      setIndex(index);
    }
  }, [activeKey]);

  useEffect(() => {
    goToTab(activeIndex);
  }, [activeIndex]);

  function setIndex(newIndex) {
    oldIndexRef.current = activeIndex;
    setActiveIndex(newIndex);
  }

  function getActiveIndex(key: T) {
    // activeKey可以直接是索引
    const list = React.Children.toArray(children).filter(
      (item: React.ReactElement) => item.type === TabPane
    );
    const index = list.findIndex(
      (item: React.ReactElement) => item.props.name === key
    );
    return index !== -1 ? index : key;
  }

  function renderTabBar() {
    return React.Children.map(children, (item: React.ReactElement, index) => {
      if (item.type === TabPane) {
        const active = activeIndex === index;
        return (
          <div
            onClick={() => onNavItemClick(index)}
            className={classnames({
              [`${prefixCls}-bar-tab`]: true,
              [`${prefixCls}-bar-tab-active`]: active
            })}
            style={{
              color: active ? tabBarActiveTextColor : tabBarInactiveTextColor
            }}
          >
            <div className={`${prefixCls}-bar-tab-title`}>
              {item.props.title}
            </div>
          </div>
        );
      }
      return null;
    });
  }

  function renderContent() {
    return React.Children.map(children, (item: React.ReactElement, index) => {
      if (item.type === TabPane) {
        return React.cloneElement(item, {
          ...item.props,
          active: activeIndex === index,
          forceRender,
          isVertical
        });
      }
      return null;
    });
  }

  function onNavItemClick(index) {
    props.onChange({
      name: (React.Children.toArray(children)[index] as React.ReactElement)
        ?.props?.name,
      index
    });
    if (activeKey === undefined) {
      setIndex(index);
    }
  }

  function _getValidIndex(index) {
    // 防止索引超过列表长度和小于0
    if (typeof index !== 'number') {
      return 0;
    }
    const count = React.Children.count(children);
    return range(index, 0, count - 1);
  }

  function goToTab(index: number) {
    index = _getValidIndex(index);
    const activeDOM = tabBar.current.querySelectorAll<HTMLDivElement>(
      `.${prefixCls}-bar-tab`
    )[index];

    tabBarAnimate(index, activeDOM);
    lineAnimate(index, activeDOM);
    contentAnimate(index);
  }

  function tabBarAnimate(index, target: HTMLDivElement) {
    const count = React.Children.count(children);
    // 让滚动菜单居中
    if (count > 4) {
      const { offsetWidth: navItemWidth, offsetHeight: navItemHeight } = target;
      const {
        offsetWidth: tabBarWidth,
        offsetHeight: tabBarHeight
      } = tabBar.current;
      tabBar.current.scrollTo({
        left: isVertical
          ? 0
          : index * navItemWidth - tabBarWidth / 2 + navItemWidth / 2,
        top: isVertical
          ? index * navItemHeight - tabBarHeight / 2 + navItemHeight / 2
          : 0,
        behavior: animated ? 'smooth' : 'auto'
      });
    }
  }

  // 下划线流体动画效果，先变化长度然后再变化位置或先变化位置再变化长度
  function lineAnimate(index, target: HTMLDivElement) {
    const oldIndex = oldIndexRef.current;
    const { offsetWidth, offsetLeft, offsetHeight, offsetTop } = target;
    const move = isVertical ? offsetTop : offsetLeft; // 移动距离
    const direction = isVertical ? 'top' : 'left'; // 移动方向
    const property = isVertical ? 'height' : 'width'; // 变化属性
    const size = isVertical ? offsetHeight : offsetWidth; // 变化大小

    if (animated) {
      if (index > oldIndex) {
        line.current.style[property] = `${(index - oldIndex) * size + size}px`;
        line.current.style.transition = `${property} .3s`;
        setTimeout(() => {
          line.current.style[property] = `${size}px`;
          line.current.style[direction] = `${move}px`;
          line.current.style.transition = 'all .15s';
        }, 300);
      } else {
        line.current.style[property] = `${(oldIndex - index) * size + size}px`;
        line.current.style[direction] = `${move}px`;
        line.current.style.transition = 'all .3s';
        setTimeout(() => {
          line.current.style[property] = `${size}px`;
          line.current.style.transition = `${property} .3s`;
        }, 300);
      }
    } else {
      line.current.style[property] = `${size}px`;
      line.current.style[direction] = `${move}px`;
    }
  }

  function contentAnimate(index) {
    if (isVertical) {
      tabsContent.current.style.transform = `translate3d(0, -${
        index * 100
      }%, 1px)`;
    } else {
      tabsContent.current.style.transform = `translate3d(-${
        index * 100
      }%, 0px, 1px)`;
    }
  }

  return (
    <div
      className={classnames({
        [prefixCls]: true,
        [className]: className,
        [`${prefixCls}-${tabBarPosition}`]: true
      })}
      style={style}
    >
      <div className={`${prefixCls}-tab-bar-wrapper`}>
        <div className={`${prefixCls}-tab-bar`} ref={tabBar}>
          {renderTabBar()}
          <div
            ref={line}
            className={`${prefixCls}-line`}
            style={{ backgroundColor: lineColor }}
          />
        </div>
      </div>
      <div
        style={contentStyle}
        ref={tabsContent}
        className={classnames({
          [contentClassName]: contentClassName,
          [`${prefixCls}-content`]: true,
          [`${prefixCls}-content-animated`]: animated
        })}
      >
        {renderContent()}
      </div>
    </div>
  );
}

Tabs.defaultProps = {
  tabBarPosition: 'top',
  forceRender: true,
  animated: true,
  onChange: () => undefined
};

export interface TabPaneProps {
  title?: React.ReactNode; // 标题
  name?: string | number; // 对应activeKey
  active?: boolean; // 是否是激活面板
  forceRender?: boolean;
  isVertical?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const TabPane = (props: TabPaneProps) => {
  const {
    title,
    name,
    active,
    children,
    forceRender,
    isVertical,
    className,
    style,
    ...other
  } = props;

  // 隐藏时是否渲染DOM
  return (
    <div
      className={classnames(`${prefixCls}-tabPane`, className)}
      style={{ ...style, height: !active && !isVertical && 0 }}
      {...other}
    >
      {!active && !forceRender ? null : children}
    </div>
  );
};

Tabs.TabPane = TabPane;
export default Tabs;
