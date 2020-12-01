import React, { useEffect, useMemo, useState } from 'react';
import { classnames } from '../_utils/index';
import Checkbox, {
  CheckboxOptionType,
  CheckboxValueType,
  GroupProps
} from './index';
import './index.less';

function Group<T extends CheckboxValueType>(props: GroupProps<T>) {
  let {
    type,
    value,
    defaultValue,
    options,
    direction,
    shape,
    color,
    disabled,
    cell,
    className,
    style
  } = props;

  const [list, setList] = useState<Array<T>>(defaultValue);

  if (cell) {
    direction = 'vertical';
  }

  useEffect(() => {
    if (Array.isArray(value)) {
      setList(value);
    }
  }, [value]);

  const newOptions: Array<CheckboxOptionType<T>> = useMemo(() => {
    if (Array.isArray(options)) {
      return options.map(option => {
        if (typeof option === 'string') {
          return {
            label: option,
            value: option
          };
        }
        return option as CheckboxOptionType<T>;
      });
    }
    return [];
  }, [options]);

  function onChange(isChecked: boolean, optionValue: T) {
    const SList = new Set(list);
    if (isChecked) {
      SList.add(optionValue);
    } else {
      SList.delete(optionValue);
    }
    const newList = Array.from(SList);
    props.onChange(newList, optionValue);
    if (value === undefined) {
      setList(newList);
    }
  }

  return (
    <div
      className={classnames({
        [className]: className,
        'sty-checkbox-group': true,
        [`sty-checkbox-group-${direction}`]: true
      })}
      style={style}
    >
      {newOptions.map(option => (
        <Checkbox
          type={type}
          key={option.value.toString()}
          style={option.style}
          value={option.value}
          checked={list.indexOf(option.value) !== -1}
          shape={shape}
          color={color}
          onChange={isChecked => onChange(isChecked, option.value)}
          disabled={
            typeof option.disabled === 'boolean' ? option.disabled : disabled
          }
          cell={cell}
        >
          {option.label}
        </Checkbox>
      ))}
    </div>
  );
}

Group.defaultProps = {
  type: 'checkbox',
  defaultValue: [],
  options: [],
  direction: 'horizontal',
  shape: 'square',
  disabled: false,
  onChange: () => undefined
};
export default Group;
