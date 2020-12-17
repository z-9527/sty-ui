import React, { useState } from 'react';
import { Checkbox } from '@/components/index';

const CheckboxGroup = Checkbox.CheckboxGroup;

const data = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '芒果', value: 'mango', disabled: true }
];

const data2 = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '芒果', value: 'mango' }
];

function CheckboxDemo() {
  const [list, setList] = useState([]);
  function onChange(arr) {
    console.log('arr: ', arr);
    setList(arr);
  }
  return (
    <div style={{ background: '#fff', paddingBottom: 30 }}>
      <div className='demo-block__title'>基础用法</div>
      <div style={{ padding: '0 16px' }}>
        <Checkbox onChange={c => console.log(c ? '同意' : '不同意')}>
          同意
        </Checkbox>
      </div>
      <div className='demo-block__title'>禁用状态</div>
      <div style={{ padding: '0 16px' }}>
        <CheckboxGroup options={data} defaultValue={['apple']} />
      </div>
      <div className='demo-block__title'>自定义颜色</div>
      <div style={{ padding: '0 16px' }}>
        <CheckboxGroup
          options={data2}
          defaultValue={['apple']}
          color='skyblue'
        />
      </div>
      <div className='demo-block__title'>自定义形状</div>
      <div style={{ padding: '0 16px' }}>
        <CheckboxGroup options={data2} defaultValue={['apple']} shape='round' />
      </div>
      <div className='demo-block__title'>垂直排列</div>
      <div style={{ padding: '0 16px' }}>
        <CheckboxGroup
          options={data2}
          defaultValue={['apple']}
          direction='vertical'
          value={list}
          onChange={onChange}
        />
      </div>
      <div className='demo-block__title'>cell和受控</div>
      <div>
        <CheckboxGroup cell options={data2} value={list} onChange={onChange} />
      </div>
    </div>
  );
}
export default CheckboxDemo;
