import React from 'react';
import { classnames } from '../_utils/index';
import Popup, { PopupProps } from '../popup';
import { Icon, Button, Empty } from '../index';
import * as CSS from 'csstype';
import './index.less';

export interface ActionSheetProps extends PopupProps {
  title?: React.ReactNode; // 顶部标题
  description?: React.ReactNode; // 选项上方的描述信息
  cancelText?: React.ReactNode; // 取消按钮文字
  onSelect?: (index: number, action: ActionType) => unknown; // 选中的回调函数
  actions?: Array<ActionType>; // 面板选项列表
}

export interface ActionType {
  name?: React.ReactNode; // 标题
  subname?: React.ReactNode; // 二级标题
  color?: CSS.Property.Color; // 选项文字颜色
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const prefixCls = 'sty-actionSheet';

function ActionSheet(props: ActionSheetProps) {
  const {
    title,
    description,
    cancelText,
    actions,
    onSelect,
    children,
    ...other
  } = props;

  function renderHeader() {
    if (title) {
      return (
        <div className={`${prefixCls}-header`}>
          {title}
          <Icon className='icon' type='cross' onClick={props.onClose} />
        </div>
      );
    }
  }
  function renderDescription() {
    if (description) {
      return <div className={`${prefixCls}-description`}>{description}</div>;
    }
  }
  function renderActions() {
    if (Array.isArray(actions) && actions.length > 0) {
      return actions.map((item, index) => (
        <Button
          onClick={() => {
            onSelect(index, actions[index]);
          }}
          key={index}
          loading={item.loading}
          disabled={item.disabled}
          style={{ border: 'none' }}
          className={classnames(
            'sty-hairline--top',
            item.className,
            `${prefixCls}-action`
          )}
        >
          {item.name && !item.loading && (
            <span
              className={`${prefixCls}-action-name`}
              style={{ color: item.color }}
            >
              {item.name}
            </span>
          )}
          {item.subname && !item.loading && (
            <span className={`${prefixCls}-action-subname`}>
              {item.subname}
            </span>
          )}
        </Button>
      ));
    }
    return !children && <Empty />;
  }
  function renderCancel() {
    if (cancelText) {
      return (
        <div className={`${prefixCls}-cancelText`}>
          <Button style={{ border: 'none' }} onClick={props.onClose}>
            {cancelText}
          </Button>
        </div>
      );
    }
  }
  return (
    <Popup {...other} className={classnames(prefixCls, props.className)}>
      {renderHeader()}
      {renderDescription()}
      {renderActions()}
      {children}
      {renderCancel()}
    </Popup>
  );
}
ActionSheet.defaultProps = {
  position: 'bottom',
  round: true,
  onSelect: () => undefined
};
export default ActionSheet;
