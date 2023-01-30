/* Write a function that calculates the factorial of a number 
(the product of all positive integers less than or equal to the number). 
For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120 */

function getFactorial(input) {    
    if (input < 0) {
        return 0;
    }
    var num = 1;
    var output = 1;
    while(num <= input) {
        output *= num;
        num++; /* ++ syntax is used to increment the loop 
        counter num by 1 after each iteration of the loop.*/   
    }
    return output;
}
console.log(getFactorial(5)) // output -> 120
console.log(getFactorial(-5)) // output -> 0