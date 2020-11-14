import React from 'react';
import { Button } from '@/components/index';
import './index.less';

function ButtonDemo() {
  return (
    <div className='button-demo'>
      <div className='demo-block__title'>按钮类型</div>
      <div className='block'>
        <Button type='default'>default</Button>
        <Button type='primary'>primary</Button>
        <Button type='warning'>warning</Button>
        <Button type='ghost'>ghost</Button>
      </div>
      <div className='demo-block__title'>行内按钮</div>
      <div className='block'>
        <Button inline type='default'>
          default
        </Button>
        <Button inline type='primary'>
          primary
        </Button>
        <Button inline type='warning'>
          warning
        </Button>
        <Button inline type='ghost'>
          ghost
        </Button>
        <Button inline round type='ghost'>
          round
        </Button>
      </div>
      <div className='demo-block__title'>禁用</div>
      <div className='block'>
        <Button disabled type='default'>
          default
        </Button>
        <Button disabled type='primary'>
          primary
        </Button>
      </div>
      <div className='demo-block__title'>加载和图标</div>
      <div className='block'>
        <Button inline type='primary' loading>
          primary
        </Button>
        <Button inline type='warning' loading>
          warning
        </Button>
        <Button icon='like-o' inline type='ghost'>
          ghost
        </Button>
      </div>
    </div>
  );
}
export default ButtonDemo;
