function reverse(input) {
    index = input.length-1
    output = ''

    while(index >= 0){
        output = output + input[index]
        index = index-1
    }
    return output
}
console.log(reverse('sanjar'))

function reverse2(input) {
    index = 0
    output = ''

    while(index < input.length){
        output = input[index] + output
        index = index+1
    }
    return output;
}
console.log(reverse2('sanjar'))