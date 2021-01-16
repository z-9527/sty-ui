import { GenerateConfig } from '../generate';
import { PanelMode } from '../interface';
import { DECADE_UNIT_DIFF } from '../panels/DecadePanel';

export function isEqual<DateType>(
  generateConfig: GenerateConfig<DateType>,
  value1: DateType,
  value2: DateType
) {
  return (
    isSameDate(generateConfig, value1, value2) &&
    isSameTime(generateConfig, value1, value2)
  );
}

export function isNullEqual<T>(value1: T, value2: T): boolean | undefined {
  if (!value1 && !value2) {
    return true;
  }
  if (!value1 || !value2) {
    return false;
  }
  return undefined;
}

export function isSameYear<DateType>(
  generateConfig: GenerateConfig<DateType>,
  year1: DateType,
  year2: DateType
) {
  const equal = isNullEqual(year1, year2);
  if (typeof equal === 'boolean') {
    return equal;
  }

  return generateConfig.getYear(year1!) === generateConfig.getYear(year2!);
}

export function isSameMonth<DateType>(
  generateConfig: GenerateConfig<DateType>,
  month1: DateType,
  month2: DateType
) {
  const equal = isNullEqual(month1, month2);
  if (typeof equal === 'boolean') {
    return equal;
  }

  return (
    isSameYear(generateConfig, month1, month2) &&
    generateConfig.getMonth(month1!) === generateConfig.getMonth(month2!)
  );
}

export function isSameDate<DateType>(
  generateConfig: GenerateConfig<DateType>,
  date1: DateType,
  date2: DateType
) {
  const equal = isNullEqual(date1, date2);
  if (typeof equal === 'boolean') {
    return equal;
  }

  return (
    generateConfig.getYear(date1!) === generateConfig.getYear(date2!) &&
    generateConfig.getMonth(date1!) === generateConfig.getMonth(date2!) &&
    generateConfig.getDate(date1!) === generateConfig.getDate(date2!)
  );
}

export function isSameTime<DateType>(
  generateConfig: GenerateConfig<DateType>,
  time1: DateType,
  time2: DateType
) {
  const equal = isNullEqual(time1, time2);
  if (typeof equal === 'boolean') {
    return equal;
  }

  return (
    generateConfig.getHour(time1!) === generateConfig.getHour(time2!) &&
    generateConfig.getMinute(time1!) === generateConfig.getMinute(time2!) &&
    generateConfig.getSecond(time1!) === generateConfig.getSecond(time2!)
  );
}

export function getWeekStartDate<DateType>(
  locale: string,
  generateConfig: GenerateConfig<DateType>,
  value: DateType
) {
  const weekFirstDay = generateConfig.locale.getWeekFirstDay(locale);
  const monthStartDate = generateConfig.setDate(value, 1);
  const startDateWeekDay = generateConfig.getWeekDay(monthStartDate);

  let alignStartDate = generateConfig.addDate(
    monthStartDate,
    weekFirstDay - startDateWeekDay
  );

  if (
    generateConfig.getMonth(alignStartDate) ===
      generateConfig.getMonth(value) &&
    generateConfig.getDate(alignStartDate) > 1
  ) {
    alignStartDate = generateConfig.addDate(alignStartDate, -7);
  }

  return alignStartDate;
}

export function getCellDateDisabled<DateType>({
  cellDate,
  mode,
  disabledDate,
  generateConfig
}: {
  cellDate: DateType;
  mode: PanelMode;
  generateConfig: GenerateConfig<DateType>;
  disabledDate?: (date: DateType) => boolean;
}): boolean {
  if (!disabledDate) return false;
  const getDisabledFromRange = (
    currentMode: 'date' | 'month' | 'year',
    start: number,
    end: number
  ) => {
    let current = start;
    while (current <= end) {
      let date: DateType;
      switch (currentMode) {
        case 'date': {
          date = generateConfig.setDate(cellDate, current);
          if (!disabledDate(date)) {
            return false;
          }
          break;
        }
        case 'month': {
          date = generateConfig.setMonth(cellDate, current);
          if (
            !getCellDateDisabled({
              cellDate: date,
              mode: 'month',
              generateConfig,
              disabledDate
            })
          ) {
            return false;
          }
          break;
        }
        case 'year': {
          date = generateConfig.setYear(cellDate, current);
          if (
            !getCellDateDisabled({
              cellDate: date,
              mode: 'year',
              generateConfig,
              disabledDate
            })
          ) {
            return false;
          }
          break;
        }
      }
      current += 1;
    }
    return true;
  };
  switch (mode) {
    case 'date': {
      return disabledDate(cellDate);
    }
    case 'month': {
      const startDate = 1;
      const endDate = generateConfig.getDate(
        generateConfig.getEndDate(cellDate)
      );
      return getDisabledFromRange('date', startDate, endDate);
    }
    case 'year': {
      return getDisabledFromRange('month', 0, 11);
    }
    case 'decade': {
      const year = generateConfig.getYear(cellDate);
      const startYear = Math.floor(year / DECADE_UNIT_DIFF) * DECADE_UNIT_DIFF;
      const endYear = startYear + DECADE_UNIT_DIFF - 1;
      return getDisabledFromRange('year', startYear, endYear);
    }
  }
}

export function isInRange<DateType>(
  generateConfig: GenerateConfig<DateType>,
  startDate: DateType,
  endDate: DateType,
  current: DateType
) {
  if (!startDate || !endDate || !current) {
    return false;
  }

  return (
    !isSameDate(generateConfig, startDate, current) &&
    !isSameDate(generateConfig, endDate, current) &&
    generateConfig.isAfter(current, startDate) &&
    generateConfig.isAfter(endDate, current)
  );
}
