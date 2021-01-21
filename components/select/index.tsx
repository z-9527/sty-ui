import React, { useEffect, useMemo, useState } from 'react';
import { CellPopup, Checkbox, Radio, Loading } from '../index';
import { CellPopupProps } from '../cell-popup';
import {
  OptionValueType,
  CheckboxOptionType,
  GroupProps,
  OptionObjType
} from '../checkbox';
import './index.less';

export type SelectValueType<T> = T | Array<T>;
export type DataSourceType<T> = Array<CheckboxOptionType<T>>;

const CheckboxGroup = Checkbox.CheckboxGroup;
const RadioGroup = Radio.RadioGroup;

export interface SelectProps<T extends OptionValueType>
  extends Omit<GroupProps<T>, 'value' | 'defaultValue'>,
    Omit<CellPopupProps, 'onOk'> {
  mode?: 'single' | 'multiple';
  value?: SelectValueType<T>;
  defaultValue?: SelectValueType<T>;
  dataSource?: DataSourceType<T>;
  loading?: boolean;
  onOk?: (value: SelectValueType<T>) => unknown;
  onChange?: (value: SelectValueType<T>) => unknown;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function Select<T extends OptionValueType>(props: SelectProps<T>) {
  const {
    mode,
    value: valueProps,
    defaultValue: defaultValueProps,
    dataSource,
    loading,
    cellTitle,
    children,
    shape,
    onOk: onOkProps,
    onChange: onChangeProps,
    onCancel,
    onVisibleChange: onVisibleChangeProps,
    className,
    style
  } = props;
  const [innerValue, setInnerValue] = useState<SelectValueType<T>>();
  const [value, setValue] = useState<SelectValueType<T>>(defaultValueProps);

  const valueText = useMemo(getValueText, [value]);

  useEffect(() => {
    setValue(valueProps || defaultValueProps);
  }, [valueProps]);

  function getValueText() {
    const texts = [];
    const valueList = Array.isArray(value) ? value : [value];
    valueList.forEach(item => {
      const text = dataSource.find(
        option => option === item || (option as OptionObjType).value === item
      );
      if (typeof text === 'object') {
        texts.push(text.label);
      } else {
        texts.push(text);
      }
    });
    return texts.join(',');
  }

  function onOk() {
    onOkProps(innerValue);
    onChangeProps(innerValue);
    // 如果不受控则由内部控制值
    if (valueProps === undefined) {
      setValue(innerValue);
    }
  }

  function onVisibleChange(visible) {
    if (visible) {
      setInnerValue(value);
    }
    onVisibleChangeProps && onVisibleChangeProps(visible);
  }
  function renderContent() {
    const baseShape: 'round' | 'square' =
      shape || mode === 'single' ? 'round' : 'square';
    const baseIconAlign: 'right' | 'left' = 'left';
    const baseProps = {
      options: dataSource,
      cell: true,
      shape: baseShape,
      iconAlign: baseIconAlign
    };
    return mode === 'single' ? (
      <RadioGroup
        {...baseProps}
        value={innerValue as T}
        onChange={v => setInnerValue(v)}
      />
    ) : (
      <CheckboxGroup
        {...baseProps}
        value={innerValue as Array<T>}
        onChange={setInnerValue}
      />
    );
  }

  return (
    <CellPopup
      className={className}
      style={style}
      cellTitle={cellTitle || children}
      cellContent={valueText}
      onOk={onOk}
      onCancel={onCancel}
      onVisibleChange={onVisibleChange}
    >
      {loading && <Loading className='sty-select-loading' />}
      <div className='sty-select'>{renderContent()}</div>
    </CellPopup>
  );
}

Select.defaultProps = {
  mode: 'single',
  onOk: () => undefined,
  onChange: () => undefined
};
export default Select;
