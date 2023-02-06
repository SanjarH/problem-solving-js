// Learn JavaScript together
/* Write a function that convert numbers to roman numerals */

// Solution
function intToRoman(num) {
    // an empty result 
    let result = '';
    // create map object for collect roman numerals as keys and integers as values 
    const map = new Map([
        ['M', 1000],['CM', 900], ['D', 500], ['CD', 400], ['C', 100],
        ['XC', 90],['L', 50],['XL', 40], ['X', 10],
        ["IX", 9], ['V', 5],['IV', 4], ['I', 1]
    
    ]);
    // cheking if num not negative or 0
    if (num <= 0 || num >= 4000 )  {
        return "Invalid input. Please enter a number between 1 and 3999";    
    }
    // use for lup for getting roman, value from map with entries() method
    /* info: Map. entries() method is used for returning an iterator object which
     contains all the [key, value] pairs of each element of the map.. */
    for ( let [roman, value] of map.entries()) {
        // while loop runs until the value of the current roman is greater than num
        while( value <= num ) {
            result += roman; // for each iteration of the while loop, the roman is added to result
            num -= value;   // and the value is subtracted from num
        }
    }
    return result;
};

// check
console.log(intToRoman(0)) // Output: -> Invalid input. Please enter a number between 1 and 3999
console.log(intToRoman(3999)) // Output: -> MMMCMXCIX
console.log(intToRoman(-1)) // Output: -> Invalid input. Please enter a number between 1 and 3999
console.log(intToRoman(2023)) // Output: -> MMXXIII 

