import React, { useEffect, useState } from 'react';
import { Checkbox } from '../index';
import { CheckboxProps, GroupProps } from '../checkbox';

export type RadioValueType = string | number;
export interface RadioProps extends CheckboxProps {}
export interface RadioGroupProps<T extends RadioValueType>
  extends Omit<GroupProps<T>, 'value' | 'defaultValue' | 'onChange'> {
  value?: T;
  defaultValue?: T;
  onChange?: (v: T) => unknown;
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
    if (value !== undefined) {
      setSelectValue(value);
    }
  }, [value]);

  function onCheckChange(list: Array<T>, optionValue: T) {
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
