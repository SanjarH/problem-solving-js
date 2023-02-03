function romanToInt(s) {
    // result equal 0
    let result = 0;
    // create map object for collect roman numerals as keys and integers as values. 
    const map = new Map([
        ['I', 1], 
        ['V', 5], 
        ['X', 10], 
        ['L', 50], 
        ['C', 100], 
        ['D', 500], 
        ['M', 1000]
    ]);
    
    // use for lup for getting index of value in s(input string)
    for ( let i = 0; i < s.length; i++) {

        // create a variable to get the value of the current Roman numeral in the string
        let currentValue = map.get(s[i]);

        // create a variable to get the value of the next Roman numeral in the string,
        // or return 0 if it is undefined
        let nextValue = map.get(s[i+1]) || 0; 

        // if currentValue is less than the nextValue, 
        // subtract the vnextValue from the result
        if ( currentValue < nextValue) {
            result -= currentValue;
        } else {
            result += currentValue; // otherwise add currentValue to result
        }
        
    }
    return result;
};
// check
console.log(romanToInt('LVIII')) // output -> 58
console.log(romanToInt('MCMXCIV')) // output -> 1994