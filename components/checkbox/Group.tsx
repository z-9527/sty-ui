import React, { useEffect, useMemo, useState } from 'react';
import { classnames } from '../_utils/index';
import Checkbox, { OptionObjType, OptionValueType, GroupProps } from './index';
import './index.less';

function Group<T extends OptionValueType>(props: GroupProps<T>) {
  const {
    type,
    value,
    defaultValue,
    options,
    direction: directionProps,
    shape,
    color,
    disabled,
    cell,
    iconAlign,
    className,
    style
  } = props;

  const [list, setList] = useState<Array<T>>(defaultValue);
  let direction = directionProps;

  if (cell) {
    direction = 'vertical';
  }

  useEffect(() => {
    setList(Array.isArray(value) ? value : []);
  }, [value]);

  const newOptions: Array<OptionObjType<T>> = useMemo(() => {
    if (Array.isArray(options)) {
      return options.map(option => {
        if (typeof option === 'string' || typeof option === 'number') {
          return {
            label: option,
            value: option
          };
        }
        return option as OptionObjType<T>;
      });
    }
    return [];
  }, [options]);

  function onChange(isChecked: boolean, option: OptionObjType<T>) {
    const valueList = new Set(list);
    if (isChecked) {
      valueList.add(option.value);
    } else {
      valueList.delete(option.value);
    }
    const newList = Array.from(valueList);
    const optionList = newList.reduce((total, cur) => {
      total.push(newOptions.find(i => i.value === cur));
      return total;
    }, []);
    props.onChange(newList, optionList);
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
          iconAlign={iconAlign}
          onChange={isChecked => onChange(isChecked, option)}
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
  iconAlign: 'right',
  disabled: false,
  onChange: () => undefined
};
export default Group;
