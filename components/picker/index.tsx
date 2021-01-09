import React, { useEffect, useState } from 'react';
import { CheckboxOptionType, OptionObjType } from '../checkbox';
import { Popup, Cell } from '../index';
import PickerPanel from './PickerPanel';
import './index.less';

const prefixCls = 'sty-picker';

export type PickerValueType = Array<string | number>;
export type ColumnOptions = Array<CheckboxOptionType>;
export interface CascadeType extends OptionObjType {
  children?: Array<CascadeType>;
}
export type PickerDataSourceType =
  | Array<ColumnOptions>
  | ColumnOptions
  | Array<CascadeType>;

export interface PickerPanelProps {
  value?: PickerValueType;
  defaultValue?: PickerValueType;
  dataSource?: PickerDataSourceType;
  loading?: boolean;
  onChange?: (val: PickerValueType, index: number) => unknown;
  visible?: boolean; // 这个属性的作用就是当在弹窗里使用picker，弹出层显示时需要重新计算高度，默认为true
  className?: string;
  style?: React.CSSProperties;
}

export interface PickerColumnProps {
  list?: ColumnOptions;
  wrapHeight?: number;
  value?: string | number;
  onChange?: (selected: string | number) => unknown;
}

export interface PickerProps extends PickerPanelProps {
  title?: React.ReactNode; // 标题
  okText?: React.ReactNode; // 确定按钮文字
  cancelText?: React.ReactNode; // 取消按钮文字
  children?: React.ReactNode;
  onOk?: (val: PickerValueType) => unknown; // 确定按钮回调
  onCancel?: () => unknown; // 取消按钮回调
  onVisibleChange?: (visible: boolean) => unknown; // 当显隐状态变化时回调函数
}

function Picker(props: PickerProps) {
  const {
    value: valueProps,
    defaultValue: defaultValueProps,
    onChange: onPropsChange,
    title,
    okText,
    cancelText,
    children,
    onOk: onOkProps,
    onCancel: onCancelProps,
    onVisibleChange,
    ...other
  } = props;
  const [value, setValue] = useState<PickerValueType>(defaultValueProps || []);
  const [viewValue, setViewValue] = useState<PickerValueType>(
    defaultValueProps || []
  );
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (Array.isArray(valueProps)) {
      setViewValue(valueProps);
    }
  }, [valueProps]);

  useEffect(() => {
    onVisibleChange(visible);
  }, [visible]);

  function onCancel() {
    onCancelProps();
    setValue(viewValue);
    setVisible(false);
  }

  function onOk() {
    onOkProps(value);
    setViewValue(value);
    setVisible(false);
  }
  function onChange(v, index) {
    onPropsChange(v, index);
    setValue(v);
  }
  return (
    <div className={prefixCls}>
      <Cell title={children} arrow='right' onClick={() => setVisible(true)}>
        {viewValue.join(',')}
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
          <div className={'sty-row-center'}>{title}</div>
          <div className={'sty-row-left'} onClick={onOk}>
            {okText}
          </div>
        </div>
        <PickerPanel
          {...other}
          visible={visible}
          value={value}
          onChange={onChange}
        />
      </Popup>
    </div>
  );
}

Picker.defaultProps = {
  okText: '确定',
  cancelText: '取消',
  onCancel: () => undefined,
  onOk: () => undefined,
  onVisibleChange: () => undefined,
  onChange: () => undefined
};
Picker.PickerPanel = PickerPanel;

export default Picker;
