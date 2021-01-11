import dayjs, { Dayjs } from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/zh-cn';

dayjs.extend(localeData);
dayjs.locale('zh-cn');

function getLocale(locale = 'zh-cn', date?): Dayjs {
  return dayjs(date).locale(locale);
}
export type GenerateConfig<DateType = Dayjs> = {
  // get
  getNow: () => DateType;
  getYear: (value: DateType) => number;
  getMonth: (value: DateType) => number;
  // set
  addYear: (value: DateType, diff: number) => DateType;
  setYear: (value: DateType, year: number) => DateType;
  setMonth: (value: DateType, month: number) => DateType;
  addMonth: (value: DateType, diff: number) => DateType;

  local: {
    format: (options: {
      locale?: string;
      date?: DateType;
      format?: string;
    }) => string;
    getShortMonths?: (locale?: string) => string[];
  };
};

const generateConfig: GenerateConfig<Dayjs> = {
  // get
  getNow: () => dayjs(),
  getYear: date => date.year(),
  getMonth: date => date.month(),
  // set
  addYear: (date, diff) => date.add(diff, 'year'),
  setYear: (date, year) => date.year(year),
  setMonth: (date, month) => date.month(month),
  addMonth: (date, diff) => date.add(diff, 'month'),
  // Compare

  // local
  local: {
    format: ({ locale, date, format }) =>
      getLocale(locale, date).format(format),
    getShortMonths: locale => getLocale(locale).localeData().monthsShort()
  }
};

export default generateConfig;