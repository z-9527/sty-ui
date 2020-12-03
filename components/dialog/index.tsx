import React, { useState } from 'react';
import Popup, { PopupProps } from '../popup';
import { ButtonProps } from '../button';
import { Button } from '../index';
import './index.less';
import { classnames } from '../_utils';

export interface DialogProps extends PopupProps {
  title?: React.ReactNode; // 弹窗标题
  okProps?: ButtonProps; // 确定按钮的属性对象
  cancelProps?: ButtonProps; // 取消按钮的属性对象
  /**
   * footerActions
   * 指定确定按钮和取消按钮是否存在以及如何排列,<br><br>**可选值**：
   * ['ok', 'cancel']（确认取消按钮同时存在，确认按钮在左）
   * ['cancel', 'ok']（确认取消按钮同时存在，确认按钮在右）
   * ['ok']（只存在确认按钮）
   * ['cancel']（只存在取消按钮）
   * 如何定义上面的类型，联合类型不能使用数组
   */
  footerActions?: Array<string>;
  footer?: Array<React.ReactNode> | React.ReactNode; // 自定义底部按钮
  onOk?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => unknown; // 确认回调
  onCancel?: () => unknown; // 取消回调
}

const prefixCls = 'sty-dialog';
function Dialog(props: DialogProps) {
  const {
    title,
    okProps,
    cancelProps,
    footerActions,
    footer,
    children,
    onOk: onPropsOk,
    onCancel: onPropsCancel,
    ...other
  } = props;
  const [loading, setLoading] = useState(false);

  function renderFooter() {
    let list = [];
    if (footer) {
      if (Object.prototype.toString.call(footer) === '[object Object]') {
        list = [footer];
      }
      if (Array.isArray(footer)) {
        list = footer;
      }
    } else if (Array.isArray(footerActions)) {
      list = footerActions.map((item: any) => renderButton(item));
    }

    return (
      <div
        className={`${prefixCls}-footer ${prefixCls}-footer-${
          list.length > 2 ? 'v' : 'h'
        }`}
      >
        {list}
      </div>
    );
  }

  function renderButton(ActionType: 'ok' | 'cancel') {
    if (ActionType === 'ok') {
      return (
        <Button
          key={ActionType}
          {...okProps}
          onClick={onOk}
          className={classnames(`${prefixCls}-button`, okProps?.className)}
          style={{ color: '#108ee9', ...okProps?.style }}
          loading={okProps?.loading !== undefined ? okProps.loading : loading}
        >
          {okProps?.children !== undefined ? okProps.children : '确认'}
        </Button>
      );
    }
    if (ActionType === 'cancel') {
      return (
        <Button
          key={ActionType}
          {...cancelProps}
          onClick={onPropsCancel}
          className={classnames(`${prefixCls}-button`, cancelProps?.className)}
        >
          {cancelProps?.children !== undefined ? cancelProps.children : '取消'}
        </Button>
      );
    }
  }

  function onOk(event) {
    const result = onPropsOk(event);
    if (result && (result as Promise<unknown>).then) {
      setLoading(true);
      (result as Promise<unknown>)
        .then(() => {
          onPropsCancel();
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      onPropsCancel();
    }
  }

  return (
    <Popup
      {...other}
      position='center'
      className={classnames(prefixCls, props.className)}
      transitionName='sty-zoom'
      onClose={onPropsCancel}
    >
      {title && <div className={`${prefixCls}-header`}>{title}</div>}
      {children && <div className={`${prefixCls}-body`}>{children}</div>}
      {renderFooter()}
    </Popup>
  );
}

Dialog.defaultProps = {
  title: '标题',
  footerActions: ['cancel', 'ok'],
  onOk: () => undefined,
  onCancel: () => undefined
};
export default Dialog;
