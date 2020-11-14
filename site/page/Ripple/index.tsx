import React from 'react';
import { Ripple } from '@/components/index';

function RippleDemo() {
  return (
    <div>
      <div className='demo-block__title'>基础用法</div>
      <Ripple style={{ height: 100, background: '#fff' }} />

      <div className='demo-block__title'>颜色波纹</div>
      <Ripple style={{ height: 100, background: '#fff' }} color='skyblue' />

      <div className='demo-block__title'>中心波纹</div>
      <Ripple style={{ height: 100, background: '#fff' }} center />
    </div>
  );
}
export default RippleDemo;
