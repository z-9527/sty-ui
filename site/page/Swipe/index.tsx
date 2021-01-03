import React from 'react';
import { Swipe } from '@/components/index';
import './index.less';

const data = ['#39a9ed', '#66c6f2', 'orange', 'pink'];

function SwipeDemo() {
  return (
    <div className='swipe-demo'>
      <div className='demo-block__title'>基础用法</div>
      <Swipe className='swipe' onChange={console.log}>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: item
              }}
              className='swipe-item'
            >
              {index + 1}
            </div>
          );
        })}
      </Swipe>
      <div className='demo-block__title'>纵向滚动</div>
      <Swipe className='swipe' vertical>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: item
              }}
              className='swipe-item'
            >
              {index + 1}
            </div>
          );
        })}
      </Swipe>
    </div>
  );
}
export default SwipeDemo;
