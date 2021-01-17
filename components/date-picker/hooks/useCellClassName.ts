import { isInRange } from '../_utils/dateUtils';
import { GenerateConfig } from '../generate';

function useCellClassName<DateType>({
  cellPrefixCls,
  generateConfig,
  value,
  today,
  isSameCell,
  isInView
}: {
  cellPrefixCls?: string;
  generateConfig: GenerateConfig<DateType>;
  value?: DateType;
  today?: DateType;
  isSameCell?: (current: DateType, target: DateType) => boolean;
  isInView?: (date: DateType) => boolean;
}) {
  const isRange = Array.isArray(value);
  function isSelected(v, current) {
    if (isRange) {
      return isSameCell(v[0], current) || isSameCell(v[1], current);
    }
    return isSameCell(v, current);
  }

  function isRangeStart(v, current) {
    if (!isRange) {
      return false;
    }
    return isSameCell(v[0], current);
  }
  function isRangeEnd(v, current) {
    if (!isRange) {
      return false;
    }
    return isSameCell(v[1], current);
  }

  function getClassName(currentDate: DateType) {
    return {
      [cellPrefixCls]: cellPrefixCls,
      [`${cellPrefixCls}-selected`]: isSelected(value, currentDate),
      [`${cellPrefixCls}-in-view`]: isInView && isInView(currentDate),
      [`${cellPrefixCls}-in-range`]:
        isRange && isInRange(generateConfig, value[0], value[1], currentDate),
      [`${cellPrefixCls}-range-start`]: isRangeStart(value, currentDate),
      [`${cellPrefixCls}-range-end`]: isRangeEnd(value, currentDate),
      [`${cellPrefixCls}-range-start-single`]:
        isRange && isRangeStart(value, currentDate) && !value[1],
      [`${cellPrefixCls}-today`]: isSameCell(today, currentDate)
    };
  }
  return getClassName;
}

export default useCellClassName;
