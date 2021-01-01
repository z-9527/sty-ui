import React, { useEffect, useMemo, useRef, useState } from 'react';
import { classnames } from '../_utils/index';
import { PickerPanelProps, ColumnOptions } from './index';
import { Loading } from '../index';
import PickerColumn from './PickerColumn';
import './index.less';

const prefixCls = 'sty-picker-panel';

function PickerPanel(props: PickerPanelProps) {
  const {
    value: valueProps,
    defaultValue,
    onChange: onPropsChange,
    visible,
    dataSource,
    loading,
    className,
    style
  } = props;
  const wrapper = useRef<HTMLDivElement>();
  const [wrapHeight, setWrapHeight] = useState(0);
  const [valueList, setValueList] = useState(defaultValue || []);

  useEffect(() => {
    if (visible) {
      setWrapHeight(wrapper.current.offsetHeight);
    }
  }, [visible]);

  useEffect(() => {
    if (Array.isArray(valueProps)) {
      setValueList(valueProps);
    }
  }, [valueProps]);

  const formattedColumns = useMemo(() => {
    if (!Array.isArray(dataSource)) {
      return [];
    }
    const firstColumn = dataSource[0] || {};
    if (Array.isArray(firstColumn)) {
      return dataSource as Array<ColumnOptions>;
    }
    return [(dataSource as ColumnOptions) || []];
  }, [dataSource]);

  function renderColumns() {
    return formattedColumns.map((item, index) => (
      <PickerColumn
        key={index}
        list={item}
        wrapHeight={wrapHeight}
        onChange={v => onColumnChange(v, index)}
        value={valueList[index]}
      />
    ));
  }

  function onColumnChange(v, index) {
    setValueList(pre => {
      const arr = pre.slice();
      arr[index] = v;
      if (JSON.stringify(pre) !== JSON.stringify(arr)) {
        onPropsChange(arr, index);
      }
      return arr;
    });
  }
  return (
    <div
      className={classnames(prefixCls, className)}
      style={style}
      ref={wrapper}
    >
      {loading && (
        <div className={`${prefixCls}-loading`}>
          <Loading />
        </div>
      )}
      <div className={`${prefixCls}-columns`}>
        {renderColumns()}
        <div
          className={`${prefixCls}-mask`}
          style={{ backgroundSize: `100% ${(wrapHeight - 44) / 2}px` }}
        />
        <div
          className={`${prefixCls}-frame sty-hairline sty-hairline--top sty-hairline--bottom`}
        />
      </div>
    </div>
  );
}

PickerPanel.defaultProps = {
  visible: true,
  onChange: () => undefined
};
export default PickerPanel;
