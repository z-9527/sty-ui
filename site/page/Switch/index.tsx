import React, { useState } from 'react';
import { Switch, Cell } from '@/components/index';

function SwitchDemo() {
  const [value, setValue] = useState(false);

  function onClick(event) {
    event.persist();
    if (event.target.nodeName === 'DIV') {
      setValue(!value);
    }
  }

  return (
    <div>
      <div className='demo-block__title'>基础用法</div>
      <Cell title='默认选中'>
        <Switch defaultChecked />
      </Cell>
      <Cell title='禁用状态'>
        <Switch defaultChecked disabled />
      </Cell>
      <Cell title='加载状态'>
        <Switch defaultChecked loading />
      </Cell>
      <Cell title='自定义颜色'>
        <Switch defaultChecked color='skyblue' />
      </Cell>
      <Cell title='自定义大小' center>
        <Switch defaultChecked size={27} />
      </Cell>
      <Cell title='受控模式' onClick={onClick}>
        <Switch checked={value} onChange={setValue} />
      </Cell>
      <Cell onClick={onClick}>
        <Switch checked={value} onChange={setValue} />
      </Cell>
    </div>
  );
}
export default SwitchDemo;
