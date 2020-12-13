import React, { useEffect, useMemo, useState } from 'react';
import { classnames } from '../_utils';
import { Loading } from '../index';
import { useTouch } from '../hooks';
import './index.less';

// 当外部不传入loading属性，且onRefresh返回Promise时，组件内部维护loading，否则由外部传入loading控制

export interface PullRefreshProps {
  pullingContent?: React.ReactNode; // 下拉过程中顶部内容
  loosingContent?: React.ReactNode; // 释放过程中顶部内容
  loadingText?: React.ReactNode; // 加载过程中顶部文字
  successContent?: React.ReactNode; // 刷新成功提示内容
  headHeight?: number; // 顶部高度，自定义提示时需要设置，默认为50
  loading?: boolean; // 是否正在请求数据
  children?: React.ReactNode;
  onRefresh?: () => unknown; // 下拉时触发
  className?: string;
  style?: React.CSSProperties;
}

const prefixCls = 'sty-refresh';

type PullRefreshStatus =
  | 'normal'
  | 'pulling'
  | 'loosing'
  | 'loading'
  | 'success';

function PullRefresh(props: PullRefreshProps) {
  const {
    pullingContent,
    loosingContent,
    loadingText,
    successContent,
    headHeight,
    loading,
    children,
    onRefresh,
    className,
    style
  } = props;
  const [status, setStatus] = useState<PullRefreshStatus>('normal');
  const [duration, setDuration] = useState(300);
  const [distance, setDistance] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const touchable = useMemo(
    () => status !== 'loading' && status !== 'success',
    [status]
  );
  const [touch, boxRef] = useTouch<HTMLDivElement>(!touchable);

  useEffect(() => {
    if (typeof loading === 'boolean') {
      setIsLoading(loading);
    }
  }, [loading]);

  useEffect(() => {
    if (isLoading) {
      changeStatus(headHeight, true);
    } else {
      showSuccessTip();
    }
  }, [isLoading]);

  function onTouchStart() {
    if (!touchable) {
      return;
    }
    setDuration(0);
  }
  function onTouchMove() {
    if (!touchable) {
      return;
    }
    if (touch && touch.direction === 'vertical') {
      const d = ease(touch.moveY);
      changeStatus(d);
    }
  }

  function onTouchEnd() {
    if (!touchable) {
      return;
    }
    if (status === 'loosing') {
      const result = onRefresh();
      if (loading === undefined) {
        if (result && (result as Promise<any>).then) {
          setIsLoading(true);
          (result as Promise<any>).finally(() => {
            setIsLoading(false);
          });
        } else {
          changeStatus(0);
        }
      }
    } else {
      changeStatus(0);
    }
    setDuration(300);
  }

  function changeStatus(d, isLoading?: boolean) {
    let newStatus: PullRefreshStatus;
    if (isLoading) {
      newStatus = 'loading';
    } else if (d === 0) {
      newStatus = 'normal';
    } else {
      newStatus = d < headHeight ? 'pulling' : 'loosing';
    }
    setStatus(newStatus);
    setDistance(d);
  }

  function showSuccessTip() {
    setStatus('success');

    setTimeout(() => {
      changeStatus(0);
    }, 500);
  }

  function renderStatus() {
    switch (status) {
      case 'loading': {
        return <Loading size={16}>{loadingText}</Loading>;
      }
      case 'loosing': {
        return <div>{loosingContent}</div>;
      }
      case 'pulling': {
        return <div>{pullingContent}</div>;
      }
      case 'success': {
        return <div>{successContent}</div>;
      }
      default:
        break;
    }
  }

  // 将touch距离处理缓和一点
  function ease(d: number) {
    if (d > headHeight) {
      if (d < headHeight * 2) {
        d = headHeight + (d - headHeight) / 2;
      } else {
        d = headHeight * 1.5 + (d - headHeight * 2) / 4;
      }
    }
    return Math.round(d);
  }
  return (
    <div className={classnames(prefixCls, className)} style={style}>
      <div
        ref={boxRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          transitionDuration: `${duration}ms`,
          transform: `translate3d(0,${distance}px, 0)`,
          height: '100%'
        }}
      >
        <div className={`${prefixCls}-header`} style={{ height: headHeight }}>
          {renderStatus()}
        </div>
        {children}
      </div>
    </div>
  );
}

PullRefresh.defaultProps = {
  pullingContent: '下拉即可刷新...',
  loosingContent: '释放即可刷新...',
  loadingText: '加载中...',
  successContent: '刷新成功',
  headHeight: 50,
  onRefresh: () => undefined
};
export default PullRefresh;
