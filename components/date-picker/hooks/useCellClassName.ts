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
  function isSelected(v, current) {
    if (Array.isArray(v)) {
      return isSameCell(v[0], current) || isSameCell(v[1], current);
    }
    return isSameCell(v, current);
  }

  function getClassName(currentDate: DateType) {
    return {
      [cellPrefixCls]: cellPrefixCls,
      [`${cellPrefixCls}-selected`]: isSelected(value, currentDate),
      [`${cellPrefixCls}-in-view`]: isInView && isInView(currentDate),
      [`${cellPrefixCls}-in-range`]:
        Array.isArray(value) &&
        isInRange(generateConfig, value[0], value[1], currentDate),
      [`${cellPrefixCls}-today`]: isSameCell(today, currentDate)
    };
  }
  return getClassName;
}

export default useCellClassName;
