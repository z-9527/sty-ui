import React, { useState } from 'react';
import { Cell, Popup, Radio, Switch } from '@/components/index';

function PopupDemo() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<
    'top' | 'bottom' | 'left' | 'right' | 'center'
  >('bottom');
  const [round, setRound] = useState(false);
  const [closable, setClosable] = useState(true);

  const isVertical = ['top', 'bottom'].includes(position);
  const style: React.CSSProperties = {};
  if (isVertical) {
    style.height = '30vh';
  } else {
    style.width = '30vw';
  }
  return (
    <div>
      <div className='demo-block__title'>基础用法</div>
      <Cell title='展示弹出层' arrow='right' onClick={() => setVisible(true)} />
      <Popup
        style={style}
        visible={visible}
        position={position}
        round={round}
        closable={closable}
        onClose={() => setVisible(false)}
      />
      <div className='demo-block__title'>弹出层位置</div>
      <Radio.RadioGroup
        value={position}
        onChange={v => setPosition(v)}
        cell
        options={[
          { label: '顶部弹出', value: 'top' },
          { label: '底部弹出', value: 'bottom' },
          { label: '左侧弹出', value: 'left' },
          { label: '右侧弹出', value: 'right' },
          { label: '中间弹出', value: 'center' }
        ]}
      />
      <div className='demo-block__title'>其他设置</div>
      <Switch cell checked={closable} onChange={setClosable}>
        显示关闭图标
      </Switch>
      <Switch cell checked={round} onChange={setRound}>
        是否圆角
      </Switch>
    </div>
  );
}
export default PopupDemo;
