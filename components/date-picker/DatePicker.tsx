import React, { useEffect, useMemo, useState } from 'react';
import { CellPopup } from '../index';
import DatePanel from './panels';
import { DatePickerProps, PickerValue } from './interface';
import { Dayjs } from 'dayjs';
import { formatDate } from './_utils/dateUtils';
import './index.less';

function DatePicker(props: DatePickerProps) {
  const {
    cellTitle,
    children,
    picker,
    format,
    value,
    defaultValue,
    onCancel,
    onVisibleChange: onVisibleChangeProps,
    onOk: onOkProps,
    onChange: onChangeProps,
    className,
    style
  } = props;
  const [innerValue, setInnerValue] = useState<PickerValue<Dayjs>>();
  const [selectedValue, setSelectedValue] = useState<PickerValue<Dayjs>>(
    defaultValue
  );

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  useEffect(() => {
    setInnerValue(selectedValue);
  }, [selectedValue]);

  const formatString = useMemo(() => {
    if (format) {
      return format;
    }
    switch (picker) {
      case 'month':
        return 'YYYY-MM';
      case 'year':
        return 'YYYY';
      default:
        return 'YYYY-MM-DD';
    }
  }, [picker, format]);

  const valueText = useMemo(() => {
    if (Array.isArray(selectedValue)) {
      return `
      ${formatDate({
        date: selectedValue[0],
        format: formatString
      })} ~ 
      ${formatDate({
        date: selectedValue[0],
        format: formatString
      })}`;
    }
    return formatDate({
      date: selectedValue,
      format: formatString
    });
  }, [selectedValue]);

  function onChange(v) {
    setInnerValue(v);
    onChangeProps && onChangeProps(v);
  }

  function onVisibleChange(visible) {
    if (visible) {
      setInnerValue(selectedValue);
    }
    onVisibleChangeProps && onVisibleChangeProps(visible);
  }

  function onOk() {
    if (value === undefined) {
      setSelectedValue(innerValue);
    }
    onOkProps && onOkProps(innerValue);
  }
  return (
    <CellPopup
      className={className}
      style={style}
      cellTitle={cellTitle || children}
      cellContent={valueText}
      onOk={onOk}
      onCancel={onCancel}
      onVisibleChange={onVisibleChange}
    >
      <DatePanel {...props} value={innerValue} onChange={onChange} />
    </CellPopup>
  );
}
export default DatePicker;
