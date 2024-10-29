/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  Monday,
  Thursday,
  Wednesday,
  Thirsday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day:number):boolean {
  return day > 4;
}

isWeekend(WeekDays.Monday); //false
isWeekend(WeekDays.Sunday); //true