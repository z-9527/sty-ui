import React, { useState } from 'react';
import { Dialog, Cell, Button } from '@/components/index';
import { DialogProps } from '@/components/dialog';

function DialogDemo() {
  const [visible, setVisible] = useState(false);
  const [config, setConfig] = useState<DialogProps>({});
  function asyncClose() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        setVisible(false);
      }, 2000);
    });
  }
  return (
    <div>
      <div className='demo-block__title'>基础用法</div>
      <Cell
        title='提示弹窗'
        arrow='right'
        onClick={() => {
          setConfig({
            footerActions: ['ok'],
            children: '代码是写出来给人看的，附带能在机器上运行'
          });
          setVisible(true);
        }}
      />
      <Cell
        title='提示弹窗(无标题)'
        arrow='right'
        onClick={() => {
          setConfig({
            footerActions: ['ok'],
            children: '代码是写出来给人看的，附带能在机器上运行',
            title: ''
          });
          setVisible(true);
        }}
      />
      <Cell
        title='确认弹窗'
        arrow='right'
        onClick={() => {
          setConfig({
            children: '代码是写出来给人看的，附带能在机器上运行',
            okProps: { style: { color: 'red' } }
          });
          setVisible(true);
        }}
      />
      <div className='demo-block__title'>异步关闭</div>
      <Cell
        title='异步关闭'
        arrow='right'
        onClick={() => {
          setConfig({
            children: '代码是写出来给人看的，附带能在机器上运行',
            onOk: asyncClose
          });
          setVisible(true);
        }}
      />
      <div className='demo-block__title'>更多按钮</div>
      <Cell
        title='更多按钮'
        arrow='right'
        onClick={() => {
          setConfig({
            children: '代码是写出来给人看的，附带能在机器上运行',
            onOk: asyncClose,
            footer: [
              <Button key={'a'} onClick={() => setVisible(false)}>
                选项一
              </Button>,
              <Button key={'b'} onClick={() => setVisible(false)}>
                选项二
              </Button>,
              <Button key={'c'} onClick={() => setVisible(false)}>
                选项三
              </Button>
            ]
          });
          setVisible(true);
        }}
      />

      <Dialog
        visible={visible}
        onOk={() => {
          console.log('ok');
          setVisible(false);
        }}
        onCancel={() => {
          console.log('onCancel');
          setVisible(false);
        }}
        {...config}
      >
        {config.children}
      </Dialog>

      <div className='demo-block__title'>组件调用</div>
      <Cell
        title='提示弹窗'
        arrow='right'
        onClick={() => {
          Dialog.show({
            title: '提示',
            content: '这是提示弹窗'
          });
        }}
      />
      <Cell
        title='确认弹窗'
        arrow='right'
        onClick={() => {
          Dialog.confirm({
            title: '提示',
            content: '这是确认弹窗',
            onOk: () => console.log('ok'),
            onCancel: () => console.log('onCancel'),
            onClose: () => console.log('onClose')
          });
        }}
      />
    </div>
  );
}
export default DialogDemo;
