function useCellClassName<DateType>({
  cellPrefixCls,
  value,
  isSameCell,
  isInView
}: {
  cellPrefixCls?: string;
  value?: DateType;
  isSameCell?: (current: DateType, target: DateType) => boolean;
  isInView?: (date: DateType) => boolean;
}) {
  function getClassName(currentDate: DateType) {
    return {
      [cellPrefixCls]: cellPrefixCls,
      [`${cellPrefixCls}-selected`]: isSameCell(value, currentDate),
      [`${cellPrefixCls}-in-view`]: isInView && isInView(currentDate)
    };
  }
  return getClassName;
}

export default useCellClassName;
