import React, { useEffect, useState } from 'react';
import { classnames } from '../_utils/index';
import * as CSS from 'csstype';
import { Icon, Cell } from '../index';
import Group from './Group';
import './index.less';

export type OptionValueType = string | number;
export type OptionObjType<T = OptionValueType> = {
  label: React.ReactNode;
  value: T;
  style?: React.CSSProperties;
  disabled?: boolean;
};
export type CheckboxOptionType<T = OptionValueType> = OptionObjType<T> | T;
export interface CheckboxProps {
  type?: 'checkbox' | 'radio';
  value?: OptionValueType;
  checked?: boolean; // 是否选中
  defaultChecked?: boolean; // 是否选中
  disabled?: boolean; // 是否禁用
  shape?: 'square' | 'round'; // 图标形状
  color?: CSS.Property.Color; // 选中颜色
  cell?: boolean; // 是否配合cell使用
  iconAlign?: 'left' | 'right';
  onChange?: (checked: boolean) => unknown;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export interface GroupProps<T extends OptionValueType> {
  type?: 'checkbox' | 'radio';
  value?: Array<T>;
  defaultValue?: Array<T>;
  options?: Array<CheckboxOptionType<T>>;
  direction?: 'vertical' | 'horizontal'; // 排列方向
  shape?: 'square' | 'round'; // 默认图标形状
  color?: CSS.Property.Color; // 选中颜色
  disabled?: boolean;
  cell?: boolean; // 是否配合cell使用
  iconAlign?: 'left' | 'right';
  onChange?: (list: Array<T>, options: Array<OptionObjType<T>>) => unknown;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function Checkbox(props: CheckboxProps) {
  const {
    type,
    value,
    checked,
    defaultChecked,
    shape,
    color,
    cell,
    iconAlign,
    disabled,
    children,
    className,
    style
  } = props;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  function onChange(event: React.ChangeEvent<HTMLInputElement> | boolean) {
    let inputChecked;
    if (typeof event === 'boolean') {
      inputChecked = event;
    } else {
      event.persist && event.persist();
      inputChecked = event.currentTarget.checked;
    }
    props.onChange(inputChecked);
    // 如果是非受控模式，内部处理
    if (checked === undefined) {
      setIsChecked(inputChecked);
    }
  }
  function renderIcon() {
    return (
      <div
        className={classnames({
          'sty-checkbox-icon': true,
          [`sty-checkbox-icon-${shape}`]: true,
          'sty-checkbox-icon-checked': isChecked
        })}
      >
        <Icon
          type='success'
          style={{
            backgroundColor: isChecked && color,
            borderColor: isChecked && color
          }}
        />
      </div>
    );
  }

  if (cell) {
    return (
      <Cell
        className={classnames({
          'sty-checkbox-cell': true,
          'sty-checkbox-disabled': disabled
        })}
        center
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {iconAlign === 'left' && (
              <div style={{ marginRight: 12 }}>{renderIcon()}</div>
            )}
            <div>{children}</div>
          </div>
        }
        onClick={() => {
          if (!disabled) {
            onChange(!isChecked);
          }
        }}
      >
        {iconAlign === 'right' && renderIcon()}
      </Cell>
    );
  }

  return (
    <label
      className={classnames({
        [className]: className,
        'sty-checkbox': true,
        'sty-checkbox-disabled': disabled
      })}
      style={style}
    >
      <input
        type={type}
        disabled={disabled}
        value={value || ''}
        onChange={onChange}
        checked={isChecked || false}
      />
      {renderIcon()}
      <div className={'sty-checkbox-label'}>{children}</div>
    </label>
  );
}

Checkbox.defaultProps = {
  type: 'checkbox',
  disabled: false,
  defaultChecked: false,
  shape: 'square',
  onChange: () => undefined
};

Checkbox.CheckboxGroup = Group;

export default Checkbox;
