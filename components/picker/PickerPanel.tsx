import React, { useEffect, useRef, useState } from 'react';
import { classnames } from '../_utils/index';
import { PickerPanelProps, CascadeType } from './index';
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
  const [columns, setColumns] = useState([]);
  const isCascade = (dataSource[0] as CascadeType)?.children;

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

  useEffect(() => {
    const arr = formatColumns();
    setColumns(arr);
  }, [dataSource]);

  function formatColumns() {
    if (!Array.isArray(dataSource)) {
      return [];
    }
    const firstColumn = dataSource[0] || {};
    if (Array.isArray(firstColumn)) {
      return dataSource;
    }
    return [dataSource || []];
  }

  function formatCascade(startColumnIndex, startColumnValue?, arr?) {
    arr = arr || columns.slice(0, startColumnIndex + 1);
    const itemIndex = getIndexOfValue(
      startColumnValue ?? valueList[startColumnIndex],
      columns[startColumnIndex]
    );
    let cursor = { children: arr[startColumnIndex][itemIndex].children };
    for (let i = startColumnIndex + 1; cursor && cursor.children; i++) {
      arr.push(cursor.children);
      const index = getIndexOfValue(valueList[i], cursor.children);
      cursor = { children: cursor.children[index].children };
    }
    return arr;
  }

  function getIndexOfValue(v, list) {
    if (!Array.isArray(list)) {
      return 0;
    }
    let index = 0;
    const findIndex = list.findIndex(i => {
      if (typeof i === 'string' || typeof i === 'number') {
        return i === v;
      }
      return i.value === v;
    });
    if (findIndex !== -1) {
      index = findIndex;
    }
    return index;
  }

  function renderColumns() {
    return columns.map((item, index) => (
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
        setTimeout(() => {
          onPropsChange(arr, index);
        });
      }
      if (isCascade) {
        setColumns(formatCascade(index, v));
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
