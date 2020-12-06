import React from 'react';
import { Icon, Tabs } from '@/components/index';
import data from './data';
import './index.less';

function IconDemo() {
  return (
    <div className='icon-demo'>
      <Tabs>
        {data.map(item => (
          <Tabs.TabPane title={item.title} key={item.title}>
            <div className='icons-box'>
              {item.icons.map(i => (
                <div className='icon-box' key={i}>
                  <Icon type={i} />
                  <span className='icon-name'>{i}</span>
                </div>
              ))}
            </div>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
}
export default IconDemo;
