function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        // console.log('This is a leap year', year);
        return true;
    }
    else {
        // console.log('This is not a leap year', year);
        return false;
    }
}

// isLeapYear(1933);
const isMyYearLeapYear = isLeapYear(1944);
console.log('My year:', isMyYearLeapYear);
const isherYearLeapYear = isLeapYear(1945);
console.log('Her year:', isherYearLeapYear);