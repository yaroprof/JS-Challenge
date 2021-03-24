
let a = 'Tiger';
let b = '12345678';
let c = 'I123'

const person = new User(a, b);   // create person - obj.

let firstStudent = new Student(a,b,c);   // create firstStudent - obj.
// console.log(firstStudent.getStudentCourses())   // User -> Student -> firstStudent
console.log(firstStudent.validatePassword())