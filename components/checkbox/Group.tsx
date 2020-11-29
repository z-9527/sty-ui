/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from 'react';
import { classnames } from '../_utils/index';
import * as CSS from 'csstype';
import Checkbox, { CheckboxValueType } from './index';
import './index.less';

export interface CheckboxOptionType {
  label: React.ReactNode;
  value: CheckboxValueType;
  style?: React.CSSProperties;
  disabled?: boolean;
}

export interface GroupProps {
  value?: Array<CheckboxValueType>;
  defaultValue?: Array<CheckboxValueType>;
  options?: Array<CheckboxOptionType | string>;
  direction?: 'vertical' | 'horizontal'; // 排列方向
  shape?: 'square' | 'round'; // 默认图标形状
  color?: CSS.Property.Color; // 选中颜色
  disabled?: boolean;
  cell?: boolean; // 是否配合cell使用
  onChange?: (list: Array<CheckboxValueType>) => unknown;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function Group(props: GroupProps) {
  const {
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

  const [list, setList] = useState(defaultValue);

  useEffect(() => {
    if (Array.isArray(value)) {
      setList(value);
    }
  }, [value]);

  const newOptions = useMemo(() => {
    if (Array.isArray(options)) {
      return options.map(option => {
        if (typeof option === 'string') {
          return {
            label: option,
            value: option
          };
        }
        return option;
      });
    }
    return [];
  }, [options]);

  function onChange(isChecked: boolean, optionValue: CheckboxValueType) {
    const SList = new Set(list);
    if (isChecked) {
      SList.add(optionValue);
    } else {
      SList.delete(optionValue);
    }
    const newList = Array.from(SList);
    props.onChange(newList);
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
  defaultValue: [],
  options: [],
  direction: 'horizontal',
  shape: 'square',
  disabled: false,
  onChange: () => undefined
};
export default Group;
