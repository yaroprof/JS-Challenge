const person = {
    name: 'Yaroslav',
    age: '41',
    parens: {
        mom: 'Olha',
        dad: 'Peter'
    }
};

const clone = JSON.parse(JSON.stringify(person));

clone.parens.mom = 'Kate';

console.log(clone);
console.log(person);