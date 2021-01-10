function useCellClassName<DateType>({
  cellPrefixCls,
  value,
  isSameCell
}: {
  cellPrefixCls?: string;
  value?: DateType;
  isSameCell?: (current: DateType, target: DateType) => boolean;
}) {
  function getClassName(currentDate: DateType) {
    return {
      [cellPrefixCls]: cellPrefixCls,
      [`${cellPrefixCls}-selected`]: isSameCell(value, currentDate)
    };
  }
  return getClassName;
}

export default useCellClassName;
