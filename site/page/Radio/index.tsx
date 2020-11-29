import React, { useState } from 'react';
import { Radio } from '@/components/index';

const RadioGroup = Radio.RadioGroup;
const data = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '芒果', value: 'mango' }
];

function RadioDemo() {
  const [value, setValue] = useState('apple');
  function onChange(v) {
    console.log('选择了:', v);
    setValue(v);
  }
  return (
    <div style={{ background: '#fff', paddingBottom: 30 }}>
      <div className='demo-block__title'>基础用法</div>
      <div style={{ padding: '0 16px' }}>
        <RadioGroup
          options={data}
          direction='vertical'
          defaultValue='apple'
          onChange={console.log}
        />
      </div>
      <div className='demo-block__title'>水平排列</div>
      <div style={{ padding: '0 16px' }}>
        <RadioGroup
          options={data}
          direction='horizontal'
          defaultValue='apple'
        />
      </div>
      <div className='demo-block__title'>禁用状态</div>
      <div style={{ padding: '0 16px' }}>
        <RadioGroup
          disabled
          options={data}
          direction='horizontal'
          defaultValue='apple'
        />
      </div>
      <div className='demo-block__title'>自定义颜色</div>
      <div style={{ padding: '0 16px' }}>
        <RadioGroup
          color='skyblue'
          options={data}
          direction='horizontal'
          value={value}
          onChange={onChange}
        />
      </div>
      <div className='demo-block__title'>cell和受控</div>
      <div style={{ padding: '0 16px' }}>
        <RadioGroup
          direction='vertical'
          options={data}
          value={value}
          onChange={onChange}
          cell
        />
      </div>
    </div>
  );
}
export default RadioDemo;
