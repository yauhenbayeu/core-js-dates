/** ********************************************************************************************
 *                                                                                             *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date       *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#date_object *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl       *
 *                                                                                             *
 ********************************************************************************************* */

/**
 * By the passed date returns the number of seconds elapsed since 00:00 01.01.1970.
 *
 * @param {string} date - date and time.
 * @return {number} milliseconds in timestamp.
 *
 * @example:
 * '01 Jan 1970 00:00:00 UTC' => 0
 * '04 Dec 1995 00:12:00 UTC' => 818035920000
 */
function dateToTimestamp(date) {
  const newDate = new Date(date);
  return newDate.valueOf();
}
// dateToTimestamp('04 Dec 1995 00:12:00 UTC');

/**
 * Returns the time in hh:mm:ss format from the received date.
 *
 * @param {Date} date - date.
 * @return {string} time in hh:mm:ss format.
 *
 * @example:
 * Date(2023, 5, 1, 8, 20, 55) => '08:20:55'
 * Date(2015, 10, 20, 23, 15, 1) => '23:15:01'
 */
function getTime(date) {
  const hours =
    String(date.getHours()).length < 2
      ? `0${date.getHours()}`
      : `${date.getHours()}`;
  const minutes =
    String(date.getMinutes()).length < 2
      ? `0${date.getMinutes()}`
      : `${date.getMinutes()}`;
  const seconds =
    String(date.getSeconds()).length < 2
      ? `0${date.getSeconds()}`
      : `${date.getSeconds()}`;
  return `${hours}:${minutes}:${seconds}`;
}
// getTime(new Date(2023, 5, 1, 8, 20, 55));

/**
 * Returns the name of the day of the week for a given date string.
 *
 * @param {string} date - date and time.
 * @return {string} the name of the day of the week
 *
 * @example:
 * '01 Jan 1970 00:00:00 UTC' => 'Thursday'
 * '03 Dec 1995 00:12:00 UTC' => 'Sunday'
 * '2024-01-30T00:00:00.000Z' => 'Tuesday'
 */
function getDayName(date) {
  const newDate = new Date(date);
  const day = newDate.getUTCDay();
  const weekDays = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };
  return weekDays[day];
}
// getDayName('01 Jan 1970 00:00:00 UTC');

/**
 * Returns the date of the next Friday from a given date.
 *
 * @param {Date} date
 * @return {Date}
 *
 * @example:
 * Date('2024-02-03T00:00:00Z') => Date('2024-02-09T00:00:00Z')
 * Date('2024-02-13T00:00:00Z') => Date('2024-02-16T00:00:00Z')
 * Date('2024-02-16T00:00:00Z') => Date('2024-02-23T00:00:00Z')
 */
function getNextFriday(date) {
  const newDate = new Date(date);
  const currentDay = newDate.getUTCDay();
  let addedDays = 5 - currentDay;

  if (currentDay >= 5) addedDays += 7;
  date.setDate(newDate.getDate() + addedDays);
  return date;
}

// getNextFriday(new Date('2024-02-03T00:00:00Z'));

/**
 * Returns the number of days in a specified month and year.
 *
 * @param {number} month - The month as a number (1 for January, 2 for February, etc.).
 * @param {number} year - The year as a four-digit number.
 * @return {number}
 *
 * @example:
 * 1, 2024 => 31
 * 2, 2024 => 29
 */
function getCountDaysInMonth(month, year) {
  const newDate = new Date(year, month, 0);
  return newDate.getDate();
}
// getCountDaysInMonth(1, 2024);

/**
 * Returns the total number of days between two dates, including both the start and end dates.
 *
 * @param {string} dateStart - The start date of the period in ISO 8601 format.
 * @param {string} dateEnd - The end date of the period in ISO 8601 format.
 * @return {number} - The total count of days in the period.
 *
 * @example:
 * '2024-02-01T00:00:00.000Z', '2024-02-02T00:00:00.000Z'  => 2
 * '2024-02-01T00:00:00.000Z', '2024-02-12T00:00:00.000Z'  => 12
 */
function getCountDaysOnPeriod(dateStart, dateEnd) {
  const newDateStart = new Date(dateStart);
  const newDateEnd = new Date(dateEnd);

  const difference = newDateEnd - newDateStart;

  return difference / (1000 * 60 * 60 * 24) + 1;
}

/**
 * Returns true if a given date is within a specified range, including both the start and end dates.
 *
 * @typedef {{
 * start: string, // The start date in ISO 8601 format (e.g., 'YYYY-MM-DD').
 * end: string    // The end date in ISO 8601 format.
 * }} DatePeriod
 *
 * @param {string} date - The date to check, in ISO 8601 format.
 * @param {DatePeriod} period - The period to check against.
 * @return {boolean} - True if the date is within the range, false otherwise.
 *
 * @example:
 * '2024-02-01', { start: '2024-02-02', end: '2024-03-02' } => false
 * '2024-02-02', { start: '2024-02-02', end: '2024-03-02' } => true
 * '2024-02-10', { start: '2024-02-02', end: '2024-03-02' } => true
 */
function isDateInPeriod(date, period) {
  const { start, end } = period;
  const dateStart = new Date(start);
  const dateEnd = new Date(end);
  const givenDate = new Date(date);

  return givenDate >= dateStart && givenDate <= dateEnd;
}

// isDateInPeriod('2024-02-01', { start: '2024-02-02', end: '2024-03-02' });

/**
 * Returns the date formatted in 'M/D/YYYY, hh:mm:ss a'.
 *
 * @param {string} date - The date to be formatted, in ISO 8601 format (e.g., 'YYYY-MM-DDTHH:mm:ss.sssZ').
 * @return {string} - The date formatted in 'Month/Day/Year, Hour:Minute:Second AM/PM'.
 *
 * @example:
 * '2024-02-01T15:00:00.000Z' => '2/1/2024, 3:00:00 PM'
 * '1999-01-05T02:20:00.000Z' => '1/5/1999, 2:20:00 AM'
 * '2010-12-15T22:59:00.000Z' => '12/15/2010, 10:59:00 PM'
 */
function formatDate(date) {
  const newDate = new Date(date);
  const month = newDate.getUTCMonth();
  const day = newDate.getUTCDate();
  const year = newDate.getUTCFullYear();
  const hours = newDate.getUTCHours();
  const minutes =
    String(newDate.getUTCMinutes()).length < 2
      ? `0${newDate.getUTCMinutes()}`
      : `${newDate.getUTCMinutes()}`;
  const seconds =
    String(newDate.getUTCSeconds()).length < 2
      ? `0${newDate.getUTCSeconds()}`
      : `${newDate.getUTCSeconds()}`;
  let time = '';

  if (hours > 12) {
    time = `${hours - 12}:${minutes}:${seconds} PM`;
  } else if (hours === 12) {
    time = `${hours}:${minutes}:${seconds} PM`;
  } else {
    time = `${hours}:${minutes}:${seconds} AM`;
  }

  return `${month + 1}/${day}/${year}, ${time}`;
}

// formatDate('2024-02-01T15:00:00.000Z');

/**
 * Returns the total number of weekend days (Saturdays and Sundays) in a specified month and year.
 *
 * @param {number} month - The source month as a number (1 for January, 2 for February, etc.).
 * @param {number} year - The source year as a four-digit number.
 * @return {number} - The total count of weekend days in the month.
 *
 * @example:
 * 5, 2022 => 9
 * 12, 2023 => 10
 * 1, 2024 => 8
 */
function getCountWeekendsInMonth(month, year) {
  const date = new Date(year, month, 0);
  let numberOfWeekends = 0;
  const amountOfDays = date.getDate();

  for (let i = 1; i <= amountOfDays; i += 1) {
    const currentDate = new Date(year, month - 1, i);
    const weekDay = currentDate.getDay();

    if (weekDay === 6 || weekDay === 0) numberOfWeekends += 1;
  }
  return numberOfWeekends;
}
// getCountWeekendsInMonth(5, 2022);

/**
 * Returns the week number of the year for a given date.
 * The first week is the one that falls on January 1.
 * The first day of the week is Monday.
 *
 * @param {Date} date - The date for which to find the week number.
 * @return {number} - The week number of the year.
 *
 * @example:
 * Date(2024, 0, 3) => 1
 * Date(2024, 0, 31) => 5
 * Date(2024, 1, 23) => 8
 */
function getWeekNumberByDate(date) {
  const newDate = new Date(date);
  const startOfTheYear = new Date(newDate.getFullYear(), 0, 1);

  const daysAfterStartOfTheYear = Math.floor(
    (newDate - startOfTheYear) / (24 * 60 * 60 * 1000)
  );
  const startOfTheWeek =
    startOfTheYear.getDay() === 0 ? 7 : startOfTheYear.getDay();

  return Math.ceil((daysAfterStartOfTheYear + startOfTheWeek) / 7);
}
// getWeekNumberByDate(new Date(2024, 0, 3));

/**
 * Returns the date of the next Friday the 13th from a given date.
 * Friday the 13th is considered an unlucky day in some cultures.
 *
 * @param {Date} date - The starting date to search from.
 * @return {Date} - The date of the next Friday the 13th.
 *
 * @example:
 * Date(2024, 0, 13) => Date(2024, 8, 13)
 * Date(2023, 1, 1) => Date(2023, 9, 13)
 */
function getNextFridayThe13th(date) {
  const newDate = new Date(date);
  let givenDay = newDate.getDay();
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  let isFriday13 = false;
  let friday13 = null;

  while (!isFriday13) {
    const nextFullDate = new Date(year, month, givenDay);
    const nextDay = nextFullDate.getDay();
    const nextDate = nextFullDate.getDate();

    if (nextDay === 5 && nextDate === 13) {
      isFriday13 = true;
      friday13 = nextFullDate;
    }

    givenDay += 1;
  }
  return friday13;
}
// getNextFridayThe13th(new Date(2024, 0, 13));

/**
 * Returns the quarter of the year for a given date.
 *
 * @param {Date} date - The date for which to find the quarter.
 * @return {number} - The quarter of the year (1-4).
 *
 * @example:
 * Date(2024, 1, 13) => 1
 * Date(2024, 5, 1) => 2
 * Date(2024, 10, 10) => 4
 */
function getQuarter(date) {
  const newDate = new Date(date);
  const month = newDate.getMonth();
  let quarter = null;

  if (month < 3) {
    quarter = 1;
  } else if (month < 6) {
    quarter = 2;
  } else if (month < 9) {
    quarter = 3;
  } else {
    quarter = 4;
  }
  return quarter;
}
// getQuarter(new Date(2024, 5, 1));

/**
 * Generates an employee's work schedule within a specified date range, based on a pattern of working and off days.
 * The start and end dates of the period are inclusive.
 *
 * @typedef {{
 * start: string, // The start date in 'DD-MM-YYYY' format.
 * end: string    // The end date in 'DD-MM-YYYY' format.
 * }} DatePeriod
 *
 * @param {DatePeriod} period - The start and end dates of the period.
 * @param {number} countWorkDays - The number of consecutive working days.
 * @param {number} countOffDays - The number of consecutive days off.
 * @return {Array<string>} - An array of dates in 'DD-MM-YYYY' format representing the work schedule.
 *
 * @example:
 * { start: '01-01-2024', end: '15-01-2024' }, 1, 3 => ['01-01-2024', '05-01-2024', '09-01-2024', '13-01-2024']
 * { start: '01-01-2024', end: '10-01-2024' }, 1, 1 => ['01-01-2024', '03-01-2024', '05-01-2024', '07-01-2024', '09-01-2024']
 */
function getWorkSchedule(period, countWorkDays, countOffDays) {
  const { start, end } = period;
  const [startDay, startMonth, startYear] = start.split('-');
  const startDate = new Date(startYear, startMonth - 1, startDay);
  const [endDay, endMonth, endYear] = end.split('-');
  const endDate = new Date(endYear, endMonth - 1, endDay);

  const schedule = [];
  const currentDate = new Date(startDate);

  const formatScheduleDate = (date) => {
    const d = `0${date.getDate()}`.slice(-2);
    const m = `0${date.getMonth() + 1}`.slice(-2);
    const y = date.getFullYear();
    return `${d}-${m}-${y}`;
  };

  while (currentDate <= endDate) {
    for (let i = 0; i < countWorkDays && currentDate <= endDate; i += 1) {
      schedule.push(formatScheduleDate(new Date(currentDate)));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    if (currentDate <= endDate) {
      currentDate.setDate(currentDate.getDate() + countOffDays);
    }
  }

  return schedule;
}

// getWorkSchedule({ start: '01-01-2024', end: '15-01-2024' }, 1, 3);

/**
 * Determines whether the year in the provided date is a leap year.
 * A leap year is a year divisible by 4, but not by 100, unless it is also divisible by 400.
 *
 * @param {Date} date - The date from which the year will be checked.
 * @return {boolean} - True if the year is a leap year, false otherwise.
 *
 * @example:
 * Date(2024, 2, 1) => true
 * Date(2022, 2, 1) => false
 * Date(2020, 2, 1) => true
 */
function isLeapYear(date) {
  const givenYear = new Date(date).getFullYear();
  return (
    (givenYear % 4 === 0 && givenYear % 100 !== 0) || givenYear % 400 === 0
  );
}
isLeapYear(new Date(2024, 2, 1));

module.exports = {
  dateToTimestamp,
  getTime,
  getDayName,
  getNextFriday,
  getCountDaysInMonth,
  getCountDaysOnPeriod,
  isDateInPeriod,
  formatDate,
  getCountWeekendsInMonth,
  getWeekNumberByDate,
  getNextFridayThe13th,
  getQuarter,
  getWorkSchedule,
  isLeapYear,
};
