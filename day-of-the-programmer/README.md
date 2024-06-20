# Day of the Programmer Problem Solution in JavaScript

### Problem Description

Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the 256th day of the year) during a year in the inclusive range from 1700 to 2700.

From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th. This means that in 1918, February 14th was the 32nd day of the year in Russia.

In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:

- Divisible by 400.
- Divisible by 4 and not divisible by 100.

Given a year, `y`, find the date of the 256th day of that year according to the official Russian calendar during that year. Then print it in the format `dd.mm.yyyy`, where `dd` is the two-digit day, `mm` is the two-digit month, and `yyyy` is `y`.

For example, the given `year = 1984`. 1984 is divisible by 4, so it is a leap year. The 256th day of a leap year after 1918 is September 12, so the answer is `12.09.1984`.

### Solution

```javascript
function dayOfProgrammer(year) {
  let day = 0;
  let month = "09";

  if (year === 1918) {
    // Transition year from Julian to Gregorian
    day = 26;
  } else if (year < 1918) {
    // Julian calendar
    if (year % 4 === 0) {
      // Leap year in Julian calendar
      day = 12;
    } else {
      day = 13;
    }
  } else {
    // Gregorian calendar
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      // Leap year in Gregorian calendar
      day = 12;
    } else {
      day = 13;
    }
  }

  return `${day.toString().padStart(2, "0")}.${month}.${year}`;
}

// Example usage:
console.log(dayOfProgrammer(1984)); // Output: 12.09.1984
console.log(dayOfProgrammer(1700)); // Output: 12.09.1700
console.log(dayOfProgrammer(1918)); // Output: 26.09.1918
```

### Explanation

1. **Year 1918 Transition**: Since 1918 is a transition year from the Julian to the Gregorian calendar, February 14th was the 32nd day of the year, thus affecting the calculation of the 256th day, which falls on September 26th.
2. **Julian Calendar (Before 1918)**: Leap years are simply those divisible by 4.

3. **Gregorian Calendar (After 1918)**: Leap years are determined by being divisible by 400 or by being divisible by 4 but not by 100.

4. **256th Day Calculation**:
   - For leap years in both calendars, the 256th day falls on September 12th.
   - For common years, it falls on September 13th.
   - For the year 1918, it falls on September 26th due to the calendar transition.

This solution correctly handles the varying leap year rules and the special transition year, outputting the date of the 256th day in the required format.
