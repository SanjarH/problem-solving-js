// Learn JavaScript together
/* 3. Write a function that takes a sentence, 
and then prints out the sentence with all punctuation removed.*/ 

function removePunctuations1(input) {
    var index = 0;
    var output = '';

    while(index < input.length) {
        var char = input[index]

        if("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".indexOf(char) === -1) {
            output += char;
        }
        index++;
    }
    return output;
}
console.log(removePunctuations1('1: @Chek-it!'))
console.log(removePunctuations1("2:Oh no!!! The server is down((, and we're about to miss the deadline???!!!"))
/* Output
1 Chekit
2 Oh no The server is down and were about to miss the deadline 
*/

// Solution 2 using RegExp
var re = /[!#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
function removePunctuations2(input) {
    return input.replace(re, '');
}
console.log(removePunctuations2('3: @Chek-it!'))
console.log(removePunctuations2("4: Oh no!!! The server is down((, and we're about to miss the deadline???!!!"))
/*
3 Chekit
4 Oh no The server is down and were about to miss the deadline*/