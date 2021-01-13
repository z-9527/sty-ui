import React from 'react';
import { CellPopupProps } from '../cell-popup';
import { GenerateConfig } from './generate';

export type PanelMode = 'date' | 'month' | 'year' | 'decade';
export type PickerMode = Exclude<PanelMode, 'decade'>;

export type PanelSharedProps<DateType> = {
  prefixCls?: string;
  generateConfig: GenerateConfig<DateType>;

  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  superPrevIcon?: React.ReactNode;
  superNextIcon?: React.ReactNode;
  value: DateType;
  viewDate: DateType;
  picker: PickerMode;
  onSelect: (date: DateType) => unknown; // 选中日期的回调
  onViewDateChange: (value: DateType) => unknown; // 中间title日期变化的回调
  onPanelChange: (mode: PanelMode, viewValue: DateType) => void; // 面板模式改变的回调
};

export interface DatePanelProps<DateType> {
  picker?: PickerMode;
  prefixCls?: string;
  generateConfig: GenerateConfig<DateType>;
  value?: DateType;
  defaultValue?: DateType;

  onPanelChange: (mode: PanelMode, viewValue: DateType) => void; // 面板模式改变的回调

  className?: string;
  style?: React.CSSProperties;
}

export interface DatePickerProps<DateType>
  extends DatePanelProps<DateType>,
    Omit<CellPopupProps, 'onOk'> {}
