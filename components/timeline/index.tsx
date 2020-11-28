import React from 'react';
import { classnames } from '../_utils/index';
import { Icon } from '../index';
import './index.less';

interface TimelineProps {
  showTime?: boolean;
  className?: string;
  children?: React.ReactNode;
  activeIndex?: boolean;
  style?: React.CSSProperties;
}

function Timeline(props: TimelineProps) {
  const { showTime, activeIndex, className, style, ...other } = props;

  function renderItem() {
    const { children, showTime } = props;
    const length = React.Children.count(children);
    return React.Children.map(children, (child: React.ReactElement, index) => {
      if (child.type === Item) {
        return React.cloneElement(child, {
          ...child.props,
          showTime,
          index,
          length,
          activeIndex
        });
      }
    });
  }

  return (
    <div className={classnames(className, 'sty-timeline')} {...other}>
      {renderItem()}
    </div>
  );
}
Timeline.defaultProps = {
  showTime: true
};

interface ItemProps {
  showTime?: boolean;
  index?: number;
  length?: number; // 子节点总长度
  icon?: any;
  children?: React.ReactNode;
  active?: boolean;
  time?: string; // YYYY-MM-DD时间
  activeIndex?: number;
  className?: string;
  style?: React.CSSProperties;
}
function Item(props: ItemProps) {
  let {
    showTime,
    index,
    length,
    icon,
    className,
    children,
    time,
    active,
    activeIndex,
    ...other
  } = props;
  const isLast = index === length - 1;
  const lineSty = {
    top: index === 0 ? 24 : 0,
    height: isLast ? 20 : '100%'
  };
  if (typeof icon === 'string') {
    icon = <Icon size='24' type={icon} />;
  }
  const times = time.split('-');
  return (
    <div className={classnames('sty-timeline-item', className)} {...other}>
      {showTime && (
        <div className={'sty-timeline-item-time'}>
          <div>{times[0]}</div>
          <div>
            {times[1]}-{times[2]}
          </div>
        </div>
      )}
      <div className={'sty-timeline-item-line-box'}>
        <div className={'sty-timeline-item-line'} style={lineSty} />
        {icon ? (
          <div className={'sty-timeline-item-icon'}>{icon}</div>
        ) : (
          <div
            className={classnames({
              'sty-timeline-item-dot': true,
              active: activeIndex === index || active
            })}
            style={{ top: index === 0 ? 16 : 20 }}
          ></div>
        )}
      </div>
      <div className={'sty-timeline-item-content sty-hairline'}>{children}</div>
    </div>
  );
}

Timeline.Item = Item;
export default Timeline;
