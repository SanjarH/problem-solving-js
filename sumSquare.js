/* 5. Write a function that takes a number, and then calculates the sum of the squares of all
 the numbers from 1 to that number (including that number). */

 function sumSquares(input) {
    var start = 1;
    var result = 0;
    if (input < start) {
        return 'Error! Please, input positive number'
    }
    while(start <= input) {
        result += start**2;
        start++;
    }
    return result;
}
console.log(sumSquares(6))
console.log(sumSquares(0))
/* Output
91
Error! Please, input positive number
*/