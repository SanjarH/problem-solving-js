/* Write a function that takes a number, and then calculates the sum of all the numbers 
from 1 to that number (including that number). 5+4+3+2+1=15*/

function sumAllNumbers(input) {
    var start = 1;
    var result = 0;
    if (input < start) {
        return 'Error! Please, input positive number'
    }
    while(start <= input) {
        result += start;
        start++;
    }
    return result;
}
console.log(sumAllNumbers(4))
console.log(sumAllNumbers(0))

/* Output
10
Error! Please, input positive number
*/