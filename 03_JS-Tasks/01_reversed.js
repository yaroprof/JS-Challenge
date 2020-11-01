/*
- given a string
- reverse it
- reverse: 'apple' === 'elppa'
 */

/*
Solution 1
1. given a string - convert it into array
2. reverse it the array
3. turn the array back into string
 */

/*
const revString = (str) =>{
    const arr = str.split("");
    arr.reverse();
    str = arr.join("")
    console.log(str);
}
revString('apple');

 */


/*
Solution 2
1. given a string - create empty string
2. loop through each character
3. return the reversed

 */


/*
(function (str){
    let reversed = '';
  for(let character of str ){
      reversed = character + reversed;
    }
    console.log(reversed)
})
('Book');

 */








































