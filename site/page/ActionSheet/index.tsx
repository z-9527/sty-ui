import React, { useState } from 'react';
import { ActionSheet, Cell, Empty } from '@/components/index';
import { ActionSheetProps } from '@/components/action-sheet';

const base = {
  actions: [
    { name: '选项一' },
    { name: '选项二' },
    { name: '选项三', subname: '副文本' }
  ]
};
const status = {
  actions: [
    { name: '选项', color: 'rgb(7, 193, 96)' },
    { name: '选项', loading: true },
    { name: '禁用选项', disabled: true }
  ]
};
function ActionSheetDemo() {
  const [visible, setVisible] = useState(false);
  const [config, setConfig] = useState<ActionSheetProps>({});
  return (
    <div>
      <div className='demo-block__title'>基础用法</div>
      <Cell
        title='基础用法'
        arrow='right'
        onClick={() => {
          setVisible(true);
          setConfig({ ...base });
        }}
      />
      <Cell
        title='展示取消按钮'
        arrow='right'
        onClick={() => {
          setVisible(true);
          setConfig({ ...base, cancelText: '取消' });
        }}
      />
      <Cell
        title='展示描述信息'
        arrow='right'
        onClick={() => {
          setVisible(true);
          setConfig({ ...base, description: '描述信息' });
        }}
      />
      <div className='demo-block__title'>选项状态</div>
      <Cell
        title='基础用法'
        arrow='right'
        onClick={() => {
          setVisible(true);
          setConfig({ ...status, onSelect: console.log });
        }}
      />
      <div className='demo-block__title'>自定义面板</div>
      <Cell
        title='自定义面板'
        arrow='right'
        onClick={() => {
          setVisible(true);
          setConfig({
            children: (
              <div>
                <Empty />
              </div>
            ),
            title: '标题'
          });
        }}
      />

      <ActionSheet
        visible={visible}
        onClose={() => setVisible(false)}
        {...config}
      />
    </div>
  );
}
export default ActionSheetDemo;
