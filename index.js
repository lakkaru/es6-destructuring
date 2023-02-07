// unpacking an array
const arr1 = [10, 20, 30];
//with index and values
let Num1 = arr1[0],
  Num2 = arr1[1],
  Num3 = arr1[2];
console.log(Num1, Num2, Num3); // 10 20 30
// with desctructuring
let [num1, num2, num3] = arr1;
console.log(num1, num2, num3); //10 20 30
// --------------------------------------------
// unpacking an object
const student = { fName: "Lakshman", lName: "Prabas" };
//with property name and values
let Fname = student.fName,
  Lname = student.lName;
console.log(Fname, Lname); // Lakshman Prabas
// with desctructuring and variables with property name
let { fName, lName } = student;
console.log(fName, lName); // Lakshman Prabas
// with desctructuring and variables with custom name
let { fName: first_name, lName: last_name } = student;
console.log(first_name, last_name); // Lakshman Prabas
// ignore elements
let [number1, , number2] = arr1;
console.log(number1, number2); // 10 30
// unpacking to variables and an array
const arr2 = [10, 20, 30, 40, 50, 60];
let [firstNum, secNum, ...arr3] = arr2;
console.log(firstNum, secNum, arr3); //10 20 (4) [30, 40, 50, 60]
// object to array insertion
const arr4 = [];
const obj1 = { fName: "Lakshman", lName: "Prabas", regNo: "R3147" };
({ fName: arr4[0], lName: arr4[1], regNo: arr4[2] } = obj1);
console.log(arr4); // (3) ['Lakshman', 'Prabas', 'R3147']

let str1 = "first";
let str2 = "second";
console.log(str1, str2); // first second
// value swapping with temp variable
let temp = str1;
str1 = str2;
str2 = temp;
console.log(str1, str2); // second first

let first = "one";
let sec = "two";
console.log(first, sec); // one two
//value swapping with destructuring
[first, sec]=[sec, first];
console.log(first, sec); // two one