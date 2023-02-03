// 1. Write a function that takes in a string and returns the string with all vowels removed.

//1 solution N1

function removeVowels(input) {
    var index = 0;
    var output = ''

    while ( index < input.length) {

        var char = input[index];

        if(char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u' &&
         char !== 'A' && char !== 'E' && char !== 'I' && char !== 'O' && char !== 'U') {
            
            output += char;
        }
        index++;
    }
    return output;
}
console.log(removeVowels('JavaScriptIscool'))
//output -> JvScrptscl

// solution N2

function removeVowels2(input){
    var index = 0;
    var output = ''

    while ( index < input.length) {

        var char = input[index];

        if('AEIOUaeiou'.indexOf(char) === -1) {
            
            output += char;
        }
        index++;
    }
    return output;
}
console.log(removeVowels2('JavaScriptIscool'))
//output -> JvScrptscl


