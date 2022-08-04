// console.log(4 / 2);
// console.log(234 / 2);
// console.log(42/ 2);
// console.log(46/ 2);


// console.log(4 % 2);
// console.log(234 % 2);
// console.log(42% 2);
// console.log(46 % 2);

// console.log(3 % 2);
// console.log(235 % 2);
// console.log(47 % 2);
// console.log(49 % 2);

function isEven(number) {
    const remainder = number % 2;
    // console.log(remainder);
    if (remainder === 0) {
        // console.log('numer is Even');
        return true;
    }
    else {
        // console.log('number is odd');
        return false;
    }
}
const myNumber = isEven(23);
console.log(myNumber);
const herNumber = isEven(122);
console.log(herNumber);