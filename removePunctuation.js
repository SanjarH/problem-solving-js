/* 3. Write a function that takes a sentence, and then prints out the sentence with all punctuation removed.*/ 

function removePunctuations(input) {
    var index = 0;
    var output = '';
    //punctuationStr = '';

    while(index < input.length) {
        var char = input[index]

        if("!()-[]{};:'\,<>./?@#$%^&*_~".indexOf(char) === -1) {

            output += char;
        }
        index++;

    }
    return output;
}
console.log(removePunctuations('1: Chek-it!'))
console.log(removePunctuations("2: Oh no!!! The server is down((, and we're about to miss the deadline???!!!"))

/* Output 
1 Chekit
2 Oh no The server is down and were about to miss the deadline */