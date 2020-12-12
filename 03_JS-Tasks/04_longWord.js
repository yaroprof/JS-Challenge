// JS- challenges - Longest word

// v.01
/*
function longestWords(str){
    let words = str.split(' ');
    let longestWords = " ";

    for(let word of words){
        if (word.length > longestWords.length){
            longestWords = word;
        }
    }
    return longestWords;
}

console.log(longestWords('Lorem Ipsum is simply dummy text of the printing and typesetting industry. '));

 */


// v.02

function longestWord(str){
    // 02 divide all of the elements of sentence and create the array
    let words = str.split(' ');
    let longestWord = '';

    // 03 we can represent all of the elements from thea words- array
    for(let word of words){
       if (word.length > longestWord.length){
           longestWord = word;
       }
    }

    // 01 get all of the elements of sentence
    return longestWord;
}

console.log(longestWord('Lorem Ipsum is simply dummy text of the printing and typesetting industry. '))


















