import React, { useState } from 'react';
import { Switch } from '@/components/index';

function SwitchDemo() {
  const [value, setValue] = useState(true);
  return (
    <div>
      <div className='demo-block__title'>基础用法</div>
      <div style={{ padding: '5px 16px' }}>
        <Switch />
      </div>
      <Switch cell defaultChecked>
        默认选中
      </Switch>
      <Switch cell defaultChecked disabled>
        禁用状态
      </Switch>
      <Switch cell defaultChecked loading>
        加载状态
      </Switch>
      <Switch cell defaultChecked color='skyblue'>
        自定义颜色
      </Switch>
      <Switch cell defaultChecked size={27}>
        自定义大小
      </Switch>
      <Switch cell checked={value} onChange={setValue}>
        受控模式
      </Switch>
      <Switch cell checked={value} onChange={setValue}></Switch>
    </div>
  );
}
export default SwitchDemo;
