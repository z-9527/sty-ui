import React, { useEffect, useState } from 'react';
import { classnames } from '../_utils/index';
import * as CSS from 'csstype';
import { Loading, Cell } from '../index';
import './index.less';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  color?: CSS.Property.Color;
  size?: number;
  children?: React.ReactNode;
  cell?: boolean; // 是否开启cell模式
  onChange?: (checked: boolean) => unknown;
  className?: string;
  style?: React.CSSProperties;
}

function Switch(props: SwitchProps) {
  const {
    checked,
    defaultChecked,
    disabled,
    loading,
    color,
    size,
    cell,
    className,
    style = {}
  } = props;
  const [value, setValue] = useState(defaultChecked);

  useEffect(() => {
    if (typeof checked === 'boolean') {
      setValue(checked);
    }
  }, [checked]);

  function onChange(e: React.ChangeEvent<HTMLInputElement> | boolean) {
    if (loading || disabled) {
      return;
    }
    let inputChecked: boolean;
    if (typeof e === 'boolean') {
      inputChecked = e;
    } else {
      e.persist();
      inputChecked = e.target.checked;
    }
    props.onChange(inputChecked);
    // 如果是非受控模式，内部处理
    if (checked === undefined) {
      setValue(inputChecked);
    }
  }

  const sty = style;
  if (value && color) {
    sty.backgroundColor = color;
  }
  if (size) {
    sty.fontSize = `${size}px`;
  }

  function onCellClick(event) {
    event.persist();
    if (event.target.nodeName === 'DIV') {
      onChange(!value);
    }
  }

  if (cell) {
    return (
      <Cell title={props.children} onClick={onCellClick}>
        <Switch {...props} checked={value} onChange={setValue} cell={false} />
      </Cell>
    );
  }

  return (
    <label
      className={classnames({
        'sty-switch': true,
        [className]: className,
        [`sty-switch-${value ? 'on' : 'off'}`]: true,
        'sty-switch-disabled': disabled
      })}
      style={sty}
    >
      <input
        type='checkbox'
        onChange={onChange}
        disabled={disabled}
        checked={value}
        value={value ? 'on' : 'off'}
      />
      <div className={'sty-switch-node'}>
        {loading && <Loading className='switch-loading' />}
      </div>
    </label>
  );
}

Switch.defaultProps = {
  defaultChecked: false,
  disabled: false,
  loading: false,
  cell: false,
  onChange: () => undefined
};
export default Switch;
