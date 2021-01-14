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
  getDate: (value: DateType) => number;
  getWeekDay: (value: DateType) => number;
  getEndDate: (value: DateType) => DateType;
  // set
  addYear: (value: DateType, diff: number) => DateType;
  setYear: (value: DateType, year: number) => DateType;
  setMonth: (value: DateType, month: number) => DateType;
  addMonth: (value: DateType, diff: number) => DateType;
  addDate: (value: DateType, diff: number) => DateType;
  setDate: (value: DateType, date: number) => DateType;
  locale: {
    format: (options: {
      locale?: string;
      date?: DateType;
      format?: string;
    }) => string;
    getShortMonths?: (locale?: string) => string[];
    getWeekFirstDay: (locale?: string) => number;
    getShortWeekDays?: (locale?: string) => string[];
  };
};

const generateConfig: GenerateConfig<Dayjs> = {
  // get
  getNow: () => dayjs(),
  getYear: date => date.year(),
  getMonth: date => date.month(),
  getDate: date => date.date(),
  getWeekDay: date => {
    const clone = date.locale('en');
    return clone.day() + clone.localeData().firstDayOfWeek();
  },
  getEndDate: date => date.endOf('month'),
  // set
  addYear: (date, diff) => date.add(diff, 'year'),
  setYear: (date, year) => date.year(year),
  setMonth: (date, month) => date.month(month),
  addMonth: (date, diff) => date.add(diff, 'month'),
  addDate: (date, diff) => date.add(diff, 'day'),
  setDate: (date, num) => date.date(num),
  // Compare

  // locale
  locale: {
    format: ({ locale, date, format }) =>
      getLocale(locale, date).format(format),
    getShortMonths: locale => getLocale(locale).localeData().monthsShort(),
    getWeekFirstDay: locale => getLocale(locale).localeData().firstDayOfWeek(),
    getShortWeekDays: locale => getLocale(locale).localeData().weekdaysMin()
  }
};

export default generateConfig;
