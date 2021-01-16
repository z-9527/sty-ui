import React from 'react';
import { CellPopupProps } from '../cell-popup';
import { GenerateConfig } from './generate';
import { Dayjs } from 'dayjs';

export type PanelMode = 'date' | 'month' | 'year' | 'decade';
export type PickerMode = Exclude<PanelMode, 'decade'>;
export type PickerValue<DateType> = DateType | [DateType?, DateType?];

export type PanelSharedProps<DateType> = {
  prefixCls?: string;
  generateConfig: GenerateConfig<DateType>;

  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  superPrevIcon?: React.ReactNode;
  superNextIcon?: React.ReactNode;
  value: PickerValue<DateType>;
  viewDate: DateType;
  picker: PickerMode;
  isRange?: boolean;
  disabledDate?: (date: DateType) => boolean;
  onSelect: (date: DateType) => unknown; // 选中日期的回调
  onViewDateChange: (value: DateType) => unknown; // 中间title日期变化的回调
  onPanelChange: (mode: PanelMode, viewValue: DateType) => void; // 面板模式改变的回调
};

export interface DatePanelProps {
  picker?: PickerMode;
  prefixCls?: string;
  generateConfig?: GenerateConfig<Dayjs>;
  value?: PickerValue<Dayjs>;
  defaultValue?: PickerValue<Dayjs>;
  isRange?: boolean;
  disabledDate?: (date: Dayjs) => boolean;
  onSelect?: (date: Dayjs) => unknown; // 选中日期的回调
  onChange?: (value: PickerValue<Dayjs>) => unknown; // 值改变的回调
  onPanelChange?: (mode: PanelMode, viewValue: Dayjs) => void; // 面板模式改变的回调

  className?: string;
  style?: React.CSSProperties;
}

export interface DatePickerProps
  extends DatePanelProps,
    Omit<CellPopupProps, 'onOk'> {}
