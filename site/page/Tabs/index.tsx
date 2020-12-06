import React, { useState } from 'react';
import { Tabs } from '@/components/index';
import './index.less';

function TabsDemo() {
  const [active, setActive] = useState(0);
  return (
    <div className='tabs-demo'>
      <div className='demo-block__title'>基础用法</div>
      <Tabs onChange={console.log} defaultActiveKey={2}>
        <Tabs.TabPane title='标签一'>内容一</Tabs.TabPane>
        <Tabs.TabPane title='标签二'>内容二</Tabs.TabPane>
        <Tabs.TabPane title='标签三'>内容三</Tabs.TabPane>
        <Tabs.TabPane title='标签四'>内容四</Tabs.TabPane>
        <Tabs.TabPane title='标签五'>内容五</Tabs.TabPane>
        <Tabs.TabPane title='标签六'>内容六</Tabs.TabPane>
      </Tabs>

      <div className='demo-block__title'>垂直样式</div>
      <Tabs
        tabBarPosition='left'
        style={{ height: 200 }}
        onChange={console.log}
      >
        <Tabs.TabPane title='标签一'>内容一</Tabs.TabPane>
        <Tabs.TabPane title='标签二'>内容二</Tabs.TabPane>
        <Tabs.TabPane title='标签三'>内容三</Tabs.TabPane>
        <Tabs.TabPane title='标签四'>内容四</Tabs.TabPane>
        <Tabs.TabPane title='标签五'>内容五</Tabs.TabPane>
        <Tabs.TabPane title='标签六'>内容六</Tabs.TabPane>
      </Tabs>

      <div className='demo-block__title'>无动画</div>
      <Tabs
        animated={false}
        activeKey={active}
        onChange={({ index }) => setActive(index)}
      >
        <Tabs.TabPane title='标签一'>内容一</Tabs.TabPane>
        <Tabs.TabPane title='标签二'>内容二</Tabs.TabPane>
        <Tabs.TabPane title='标签三'>内容三</Tabs.TabPane>
      </Tabs>

      <div className='demo-block__title'>样式配置</div>
      <Tabs
        lineColor='skyblue'
        tabBarActiveTextColor='skyblue'
        activeKey={active}
        onChange={({ index }) => setActive(index)}
      >
        <Tabs.TabPane title='标签一'>内容一</Tabs.TabPane>
        <Tabs.TabPane title='标签二'>内容二</Tabs.TabPane>
        <Tabs.TabPane title='标签三'>内容三</Tabs.TabPane>
        <Tabs.TabPane title='标签四'>内容四</Tabs.TabPane>
        <Tabs.TabPane title='标签五'>内容五</Tabs.TabPane>
        <Tabs.TabPane title='标签六'>内容六</Tabs.TabPane>
      </Tabs>
    </div>
  );
}
export default TabsDemo;
