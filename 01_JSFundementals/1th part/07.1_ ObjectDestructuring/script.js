const option = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};
// ---> Object.keys - method
// console.log(Object.keys(option));


// ---> Object Destructuring

const { border, bg } = option.colors;
console.log(border, bg);
