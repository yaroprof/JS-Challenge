// find palindromes
// palindrome ('abba') === true
// palindrome('sdhcjas') === false

/*
1. reverse the string
2. check with original if they are same
 */

// Solution 1

/*
const Palindrome = (str) =>{
    const isPalindrome = str.split("").reverse("").join("");
    console.log(str === isPalindrome);
}
Palindrome('abba');

 */


// Solution 2

/*
(function (str){
    let reversed = "";
    for (let x of str){
        reversed = x + reversed;
    }
    console.log(str === reversed)

} )('apple');

 */




















