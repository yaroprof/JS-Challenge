function hello(){
    console.log('Hello world');
    debugger;
}
hello();

function hi(){
    console.log('Say Hi!')
}
hi();


const arr = [3,1,7,6],
    sorted = arr.sort(compareNum);

function compareNum(a,b){
    return a-b;
}
compareNum();

