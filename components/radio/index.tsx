import React, { useEffect, useState } from 'react';
import { Checkbox } from '../index';
import { CheckboxProps, GroupProps } from '../checkbox';

export type RadioValueType = string | number;
export interface RadioProps extends CheckboxProps {}
export interface RadioGroupProps
  extends Omit<GroupProps, 'value' | 'defaultValue' | 'onChange'> {
  value?: RadioValueType;
  defaultValue?: RadioValueType;
  onChange?: (v: RadioValueType) => unknown;
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

function RadioGroup(props: RadioGroupProps) {
  const { value, defaultValue, onChange, ...other } = props;
  const [selectValue, setSelectValue] = useState<RadioValueType>(defaultValue);

  useEffect(() => {
    if (value !== undefined) {
      setSelectValue(value);
    }
  }, [value]);

  function onCheckChange(list: Array<RadioValueType>, optionValue) {
    setSelectValue(optionValue);
    props.onChange(optionValue);
    if (value === undefined) {
      setSelectValue(optionValue);
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
