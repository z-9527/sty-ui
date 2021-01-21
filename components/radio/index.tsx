import React, { useEffect, useState } from 'react';
import { Checkbox } from '../index';
import { CheckboxProps, GroupProps, OptionObjType } from '../checkbox';

export type RadioValueType = string | number;
export interface RadioProps extends CheckboxProps {}
export interface RadioGroupProps<T extends RadioValueType>
  extends Omit<GroupProps<T>, 'value' | 'defaultValue' | 'onChange'> {
  value?: T;
  defaultValue?: T;
  onChange?: (v: T, option: OptionObjType<T>) => unknown;
}

function Radio(props: RadioProps) {
  const { ...other } = props;
  return <Checkbox {...other} type='radio' />;
}
Radio.defaultProps = {
  disabled: false,
  defaultChecked: false,
  shape: 'round',
  onChange: () => undefined
};

function RadioGroup<T extends RadioValueType>(props: RadioGroupProps<T>) {
  const { value, defaultValue, onChange, ...other } = props;
  const [selectValue, setSelectValue] = useState<T>(defaultValue);

  useEffect(() => {
    setSelectValue(value);
  }, [value]);

  function onCheckChange(list: Array<T>, optionList: Array<OptionObjType<T>>) {
    const lastIndex = list.length - 1;
    const v = list[lastIndex];
    if (v === undefined) {
      return;
    }
    const option = optionList[lastIndex];
    props.onChange(v, option);
    if (value === undefined) {
      setSelectValue(v);
    }
  }
  return (
    <Checkbox.CheckboxGroup
      value={selectValue !== undefined ? [selectValue] : []}
      defaultValue={defaultValue !== undefined ? [defaultValue] : []}
      onChange={onCheckChange}
      type='radio'
      {...other}
    />
  );
}
RadioGroup.defaultProps = {
  shape: 'round',
  onChange: () => undefined
};

Radio.RadioGroup = RadioGroup;

export default Radio;
