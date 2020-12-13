import React, { useState } from 'react';
import { PullRefresh, Tabs, Toast } from '@/components/index';
import './index.less';

function PullRefreshDemo() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  function onRefresh() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setCount(count + 1);
        resolve();
      }, 2000);
    });
  }
  function onRefresh2() {
    setLoading(true);
    setTimeout(() => {
      Toast.info({ content: '刷新成功', duration: 2 });
      setCount(count + 1);
      setLoading(false);
    }, 2000);
  }
  return (
    <div className='refresh-demo'>
      <Tabs contentStyle={{ height: 400 }}>
        <Tabs.TabPane title='基本用法'>
          <PullRefresh onRefresh={onRefresh}>
            <div className='block'>
              <p>下拉刷新次数{count}</p>
              <p>当onRefresh返回Promise时，可不传loading</p>
            </div>
          </PullRefresh>
        </Tabs.TabPane>
        <Tabs.TabPane title='成功提示'>
          <PullRefresh onRefresh={onRefresh2} loading={loading}>
            <div className='block'>
              <p>下拉刷新次数{count}</p>
              <p>由自己控制loading</p>
            </div>
          </PullRefresh>
        </Tabs.TabPane>
        <Tabs.TabPane title='自定义提示'>
          <PullRefresh
            onRefresh={onRefresh}
            pullingContent={
              <img className='dog' src='https://b.yzcdn.cn/vant/doge.png' />
            }
            loosingContent={
              <img
                className='dog'
                src='https://b.yzcdn.cn/vant/doge-fire.jpg'
              />
            }
          >
            <div className='block'>下拉刷新次数{count}</div>
          </PullRefresh>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
export default PullRefreshDemo;
