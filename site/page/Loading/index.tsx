import React from 'react';
import { Loading } from '@/components/index';
import './index.less';

function LoadingDemo() {
  return (
    <div className='loading-demo'>
      <div className='demo-block__title'>加载类型</div>
      <Loading type='circular' />
      <Loading type='spinner' />

      <div className='demo-block__title'>自定义颜色</div>
      <Loading type='circular' color='#80d0c7' />
      <Loading type='spinner' color='#80d0c7' />

      <div className='demo-block__title'>自定义大小</div>
      <Loading type='circular' size={24} />
      <Loading type='spinner' size={24} />

      <div className='demo-block__title'>加载文案</div>
      <Loading>加载中...</Loading>

      <div className='demo-block__title'>垂直排列</div>
      <Loading vertical>加载中...</Loading>
    </div>
  );
}
export default LoadingDemo;
