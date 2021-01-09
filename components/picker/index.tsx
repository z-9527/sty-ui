import React, { useEffect, useState } from 'react';
import { CheckboxOptionType, OptionObjType } from '../checkbox';
import { CellPopup } from '../index';
import PickerPanel from './PickerPanel';
import { CellPopupProps } from '../cell-popup';
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

export interface PickerProps
  extends PickerPanelProps,
    Omit<CellPopupProps, 'onOk'> {
  title?: React.ReactNode; // 标题
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
    cellTitle,
    cellContent,
    popupTitle,
    title,
    okText,
    cancelText,
    children,
    onOk: onOkProps,
    onCancel: onCancelProps,
    onVisibleChange: onVisibleChangeProps,
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

  function onCancel() {
    onCancelProps();
    setValue(viewValue);
  }

  function onOk() {
    onOkProps(value);
    setViewValue(value);
  }
  function onVisibleChange(v) {
    onVisibleChangeProps(v);
    setVisible(v);
  }
  function onChange(v, index) {
    onPropsChange(v, index);
    setValue(v);
  }
  return (
    <CellPopup
      cellTitle={cellTitle || children}
      cellContent={cellContent || viewValue.join(',')}
      popupTitle={title || popupTitle}
      className={prefixCls}
      onOk={onOk}
      onCancel={onCancel}
      onVisibleChange={onVisibleChange}
    >
      <PickerPanel
        {...other}
        visible={visible}
        value={value}
        onChange={onChange}
      />
    </CellPopup>
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
