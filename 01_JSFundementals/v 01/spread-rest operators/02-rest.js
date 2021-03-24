// rest
/*
function sum(a,b, ...rest){
    // console.log(rest)  // оператор rest видає решту - "зайвих" аргументів
    return a+b + rest.reduce((a,i) => a+i,0);  // reduce- сума всіх елементів
}

const numbers = [1,2,3,4,5]

// spread
// console.log(sum(...numbers))

const [a,b, ...other] = numbers  // дуструктуризація - забираємо елементи масиву - numbers у змінні: a,b

// console.log(a,b, ...other)

 */

// - destructuring

const person= {
    name: 'Mike',
    age: 20,
    city: 'Boston',
    country: 'USA'
}

const{name, age, ...address} = person

console.log(name,age, address);
console.log(address);






































