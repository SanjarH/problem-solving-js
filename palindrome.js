// Learn JavaScript together
function isPalindrome(x){
    let string = x.toString();
    let reverse = ''
    let i = 0;
    while( i < string.length) {
        reverse = string[i] + reverse;  
        i = i+1;
    }
    return string === reverse; 
}
// check
console.log(isPalindrome(10))   // ->> false
console.log(isPalindrome(-121)) // ->> false
console.log(isPalindrome(121))  // ->> true
