import React from 'react';
import { Cell } from '@/components/index';

function RippleDemo() {
  return (
    <div>
      <div className='demo-block__title'>基础用法</div>
      <Cell title='标题'>右侧内容</Cell>
      <Cell title='标题' label='描述信息'>
        右侧内容
      </Cell>

      <div className='demo-block__title'>展示箭头</div>
      <Cell title='标题' arrow='right' clickable></Cell>
      <Cell title='标题' arrow='down' clickable>
        右侧内容
      </Cell>
      <Cell title='标题' label='描述系信息' arrow='right' clickable>
        右侧内容
      </Cell>

      <div className='demo-block__title'>水波纹反馈</div>
      <Cell title='标题' arrow='right' ripple></Cell>
      <Cell title='标题' label='描述系信息' arrow='right' center ripple>
        居中内容
      </Cell>
    </div>
  );
}
export default RippleDemo;
