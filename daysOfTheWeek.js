function dayOfTheWeek(a) {
  days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (a < 1 || a > 7) {
    return null;
  } else {
    console.log(days[a - 1]);
    return days[a - 1];
  }
}

dayOfTheWeek(5);
