import React from 'react';
import { NavBar, Icon } from '@/components/index';

function NavBarDemo() {
  return (
    <div>
      <div className='demo-block__title'>基础用法</div>
      <NavBar title='标题' border right='右边' leftArrow />

      <div className='demo-block__title'>使用事件</div>
      <NavBar
        title='标题'
        border
        right={<Icon type='search' size={18} />}
        leftArrow
        onClickLeft={() => console.log('click left')}
        onClickRight={() => console.log('click right')}
      />
    </div>
  );
}
export default NavBarDemo;
