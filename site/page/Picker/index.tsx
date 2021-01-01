import React, { useState } from 'react';
import { Picker } from '@/components/index';
import { PickerDataSourceType } from '@/components/picker';

const PickerPanel = Picker.PickerPanel;

const cities = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'];
const cities2 = {
  浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  福建: ['福州', '厦门', '莆田', '三明', '泉州']
};
const date = [
  ['周一', '周二', '周三', '周四', '周五'],
  ['上午', '下午', '晚上']
];
const date2: PickerDataSourceType = [
  [
    { label: '周一', value: '周一' },
    { label: '周二', value: '周二' },
    { label: '周三', value: '周三' },
    { label: '周四', value: '周四', disabled: true },
    { label: '周五', value: '周五' }
  ],
  [
    { label: '上午', value: '上午' },
    { label: '下午', value: '下午', disabled: true },
    { label: '晚上', value: '晚上', style: { color: 'skyblue' } }
  ]
];

const cascadeData = [
  {
    label: '浙江',
    value: '浙江',
    children: [
      {
        label: '杭州',
        value: '杭州',
        children: [
          { label: '西湖区', value: '西湖区' },
          { label: '余杭区', value: '余杭区' }
        ]
      },
      {
        label: '温州',
        value: '温州',
        children: [
          { label: '鹿城区', value: '鹿城区' },
          { label: '瓯海区', value: '瓯海区' }
        ]
      }
    ]
  },
  {
    label: '福建',
    value: '福建',
    children: [
      {
        label: '福州',
        value: '福州',
        children: [
          { label: '鼓楼区', value: '鼓楼区' },
          { label: '台江区', value: '台江区' }
        ]
      },
      {
        label: '厦门',
        value: '厦门',
        children: [
          { label: '思明区', value: '思明区' },
          { label: '海沧区', value: '海沧区' }
        ]
      }
    ]
  }
];
function onChange(v, index) {
  console.log('onChange: ', v, 'col: ', index);
}
function onOk(v) {
  console.log('onOk: ', v);
}
function onCancel() {
  console.log('onCancel');
}
function onVisibleChange(visible) {
  console.log('onVisibleChange', visible);
}

function PickerDemo() {
  const [loading, setLoading] = useState(false);
  const [columns, setColumns] = useState([]);
  const [value, setValue] = useState(['周三', '晚上']);

  return (
    <div>
      <div className='demo-block__title'>基础用法</div>
      <Picker
        title='单列选择'
        dataSource={cities}
        onChange={onChange}
        onOk={onOk}
        onCancel={onCancel}
        onVisibleChange={onVisibleChange}
      >
        单列选择
      </Picker>
      <Picker
        title='多列选择'
        dataSource={date}
        onOk={onOk}
        onChange={onChange}
      >
        多列选择
      </Picker>
      <Picker title='加载状态' dataSource={cities} loading>
        加载状态
      </Picker>
      <Picker title='禁用状态' dataSource={date2} onOk={onOk}>
        禁用状态/自定义样式
      </Picker>
      <Picker
        title='动态设置选项'
        dataSource={columns}
        onOk={onOk}
        loading={loading}
        onVisibleChange={visible => {
          if (visible && !columns.length) {
            setLoading(true);
            setTimeout(() => {
              setColumns([Object.keys(cities2), cities2['浙江']]);
              setLoading(false);
            }, 2000);
          }
        }}
        onChange={(values, col) => {
          if (col === 0 && values) {
            const list = columns.slice();
            list[1] = cities2[values[0]];
            setColumns(list);
          }
        }}
      >
        动态设置选项
      </Picker>
      <Picker title='级联选择' dataSource={cascadeData} onChange={onChange}>
        级联选择
      </Picker>
      <div className='demo-block__title'>面板用法(演示受控)</div>
      <PickerPanel
        dataSource={date}
        value={value}
        onChange={(v: Array<string>) => {
          console.log('v: ', v);
          setValue(v);
        }}
      />
      <PickerPanel dataSource={date} value={value} style={{ marginTop: 30 }} />
    </div>
  );
}
export default PickerDemo;
