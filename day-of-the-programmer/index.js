function dayOfProgrammer(year) {
    let day = 0;
    let month = '09';

    if (year === 1918) {
        day = 26;
    } else if (year < 1918) {
        if (year % 4 === 0) {
            day = 12;
        } else {
            day = 13;
        }
    } else {
        if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
            day = 12;
        } else {
            day = 13;
        }
    }

    return `${day.toString().padStart(2, '0')}.${month}.${year}`;
}
