let todoList = [];

// #1
// function addTodo( arr, item ) {
//     arr.push(item);
// }
//
// addTodo(todoList, 'Walk with dog');
// addTodo(todoList, 'Make coffee');
//
// console.log(todoList);


// #2

function addTodo ( arr ) {
    let answer = prompt('What would you do today?');
    let correct = answer.toLowerCase().trim();

    let index = arr.indexOf(correct);

    if (index === -1){
        arr.push(answer);
    } else
        alert('Item already exists, do not so hard');


}



// function checkDuplicate (arr, item){
//     let exists;
//     let index = arr.indexOf(item);
//     if(index !=-1){
//         exists = false;
//     }
//     else{
//         exists = true;
//     }
//     return exists;
// }




addTodo( todoList );
addTodo( todoList );
addTodo( todoList );

console.log( todoList );