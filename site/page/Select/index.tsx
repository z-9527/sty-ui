import React from 'react';
import { Select } from '@/components/index';

const dataSource1 = new Array(10).fill({}).map((item, index) => ({
  label: `选项${index + 1}`,
  value: index + 1
}));

const dataSource2 = new Array(10).fill({}).map((item, index) => ({
  label: `选项${index + 1}`,
  value: index + 1,
  disabled: !!(index % 2)
}));

function SelectDemo() {
  return (
    <div>
      <div className='demo-block__title'>基础用法</div>
      <Select dataSource={dataSource1} mode='single'>
        单选
      </Select>
      <Select dataSource={dataSource1} mode='multiple'>
        多选
      </Select>
      <Select dataSource={dataSource2} mode='multiple'>
        禁用选项
      </Select>
      <Select dataSource={dataSource1} mode='multiple' loading>
        加载状态
      </Select>
    </div>
  );
}
export default SelectDemo;
