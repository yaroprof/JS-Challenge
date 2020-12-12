
    function capitalizeWords(str){
        let words = str.split(" ").map(word=>{     // result of call-back function: word create new array through map-method

            // 1th Meth

            // let firstLetter = word.slice(0,1);
            // let rest = word.slice(1);
            //
            // firstLetter = firstLetter.toUpperCase();
            //
            // return `${firstLetter}${rest}`

            // 2th

            return word.charAt(0).toUpperCase()+ word.slice(1);

        })
        return words.join(" ");
    }
    console.log(capitalizeWords( 'Lorem ipsum dolor sit amet'));





























