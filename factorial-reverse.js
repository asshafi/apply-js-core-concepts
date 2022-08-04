// 1 * 2 * 3 * 4 * 5 * 6 * 7 
function factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--){
        result = result * i;
    }
    return result;
}
const result = factorial(10);
console.log(result);