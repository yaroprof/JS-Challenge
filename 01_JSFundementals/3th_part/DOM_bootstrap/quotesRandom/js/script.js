(function (){
    const quotes = [
        {
            quote: 'Quote_1',
            author: 'Life1'
        },
        {
            quote: 'Quote_2',
            author: 'Life2'
        },
        {
            quote: 'Quote_3',
            author: 'Life3'
        },
        {
            quote: 'Quote_4',
            author: 'Life4'
        },
        {
            quote: 'Quote_5',
            author: 'Life5'
        },

    ]


    const btn = document.getElementById('generate-btn');
    btn.addEventListener('click', function (){

        let random = Math.floor(Math.random() * quotes.length);

        document.getElementById('quote').textContent = quotes[random].quote;
        document.querySelector('.author').textContent = quotes[random].author;
    })




























})()