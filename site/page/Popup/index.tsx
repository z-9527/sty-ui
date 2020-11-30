import React, { useState } from 'react';
import { Cell, Popup, Switch } from '@/components/index';

function PopupDemo() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<
    'top' | 'bottom' | 'left' | 'right' | 'center'
  >('top');
  // const [round, setRound] = useState(false);
  // const [closable, setClosable] = useState(false);
  return (
    <div>
      <div className='demo-block__title'>基础用法</div>
      <Cell title='展示弹出层' arrow='right' onClick={() => setVisible(true)} />
      <Popup
        visible={visible}
        position={position}
        // round={round}
        // closable={closable}
        onClose={() => setVisible(false)}
      />
      <div className='demo-block__title'>弹出层位置</div>
      <Cell title='顶部弹出' onClick={() => setPosition('top')} />
      <Cell title='底部弹出' onClick={() => setPosition('bottom')} />
      <Cell title='左侧' onClick={() => setPosition('left')} />
      <Cell title='右侧' onClick={() => setPosition('right')} />
      <Cell title='中间' onClick={() => setPosition('center')} />
      <div className='demo-block__title'>其他设置</div>
      {/* <Switch cell>显示关闭图标</Switch> */}
    </div>
  );
}
export default PopupDemo;
