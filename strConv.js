//input = CzyliTakimZDużymiLiterami
//output = czyli-takim-z-dużymi-literami

function strConvert(input) {
    var charList = input.split('')      // split input in new variable
    var output = ''                     // output variable with empty string
    var index = 0                       // index variable 
    while (index < input.length) {
        output = output + charList[index]   // output return all characters in the input list 
        index = index+1                     // if index less than length of input list will return index+1
        char = input[index]                 // new variable to check input list with index
        if (char >= 'A' && char <= 'Z'){    // check upper characters into input
            output += '-'                   // and add '-' if there is uppercase character
        }
    }

    return output.toLowerCase();
}
console.log(strConvert('CzyliTakimZDużymiLiterami'))

