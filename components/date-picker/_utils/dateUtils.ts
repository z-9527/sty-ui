import { GenerateConfig } from '../generate';

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
