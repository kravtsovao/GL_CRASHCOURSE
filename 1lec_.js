//типи даних

var student = { name: "Olya" };
console.log(student.name);
console.log(typeof student);                                    // Type is object
var x;
console.log(x);                                                 // Undefined

let isGreater = 4 < 1;
console.log(isGreater);                                         // Returns false (boolean)

let nameOlya = true
console.log('Is your name Olya? ' + nameOlya);

let message = "word";                                            // String
message = 123;

myArray = [ 1, 2, 3, 4, 5, 6];                                    //Array
console.log(myArray[2]);                                          

var age = null;                                                   // Null

console.log(message);
console.log(typeof message);                                      // Number

let id = Symbol();
console.log(typeof id);                                           // Symbol

//змінні (ідентифікатори)

var myWord;
myWord = 'hello';

const a = 10;
const b = 11;
const c1 = 12;
const _d = 13;

const one = 1;
const $ONE = 1;

let $second = 2;
let text = "text"; 
text = "new text";

const sum = one + $second;
console.log(sum);


//перевірки типів даних  typeof  +  з використанням операторів порівняння
var number
number = 6+345234;
console.log(number);
console.log('Type of "number" is ' + typeof number);        //Type is number

var obj = {name: 'sor'},
array = [ 1, 2, 3 ],
regexp = /w + /g,
func = function () {};

console.log('Type of "obj" is ' + typeof obj);               //Type is object
console.log('Type of "array" is ' + typeof array);           //Type is object
console.log('Type of "regexp" is ' + typeof regexp);         //Type is object
console.log('Type of "func" is ' + typeof func);             //Type is function

var N = new Number(4000);                                    //Type is object
console.log(typeof N);

let message2 = "word2";
console.log(typeof message2);                                //Type is string

var n = 5000;
console.log(typeof n);                                        //Type is number

const num = 42;
const num2 = "42";
console.log(num==num2);                                       // Returns true
console.log(num===num2);                                      // Returns false (data types are different)

const str = "Some text";
const str2 = "Some text 2";
console.log(str==str2);                                       // Returns false
console.log(str===str2);                                      // Returns false (text input is different)
