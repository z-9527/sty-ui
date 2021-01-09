import React, { useEffect, useState } from 'react';
import { Cell, Popup } from '../index';
import './index.less';

export interface CellPopupProps {
  cellTitle?: React.ReactNode; // cell标题
  cellContent?: React.ReactNode; // cell内容
  popupTitle?: React.ReactNode; // popup标题
  okText?: React.ReactNode; // 确定按钮文字
  cancelText?: React.ReactNode; // 取消按钮文字
  children?: React.ReactNode;
  onOk?: () => unknown; // 确定按钮回调
  onCancel?: () => unknown; // 取消按钮回调
  onVisibleChange?: (visible: boolean) => unknown; // 当显隐状态变化时回调函数
  className?: string;
  style?: React.CSSProperties;
}

function CellPopup(props: CellPopupProps) {
  const {
    cellTitle,
    cellContent,
    popupTitle,
    okText,
    cancelText,
    children,
    onOk: onOkProps,
    onCancel: onCancelProps,
    onVisibleChange,
    className,
    style
  } = props;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    onVisibleChange(visible);
  }, [visible]);

  function onCancel() {
    onCancelProps();
    setVisible(false);
  }

  function onOk() {
    onOkProps();
    setVisible(false);
  }
  return (
    <div className={className} style={style}>
      <Cell title={cellTitle} arrow='right' onClick={() => setVisible(true)}>
        {cellContent}
      </Cell>
      <Popup
        visible={visible}
        onClose={() => setVisible(false)}
        position='bottom'
        closable={false}
      >
        <div className={'sty-row'}>
          <div className={'sty-row-left'} onClick={onCancel}>
            {cancelText}
          </div>
          <div className={'sty-row-center'}>{popupTitle}</div>
          <div className={'sty-row-right'} onClick={onOk}>
            {okText}
          </div>
        </div>
        {children}
      </Popup>
    </div>
  );
}

CellPopup.defaultProps = {
  okText: '确认',
  cancelText: '取消',
  onOk: () => undefined,
  onCancel: () => undefined,
  onVisibleChange: () => undefined
};
export default CellPopup;
