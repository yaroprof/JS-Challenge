// return true only if all values are unique, otherwise false

function unique(str){
  let values = [];
  for (let letter of str){
      if (values.indexOf(letter) !== -1 ){
          return false;
      }
      values.push(letter);

      // console.log(values.indexOf(letter));
      // values = [...values, letter];
  }

  return true;
}


console.log(unique('abcde'));
console.log(unique('abcdefb'));