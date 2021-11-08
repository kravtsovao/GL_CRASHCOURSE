// оператори присвоєння

var n =100;
n+=20;
console.log(n);                             //120

n*=2;
console.log(n);                             //240

var o = 200;
o-=200;
console.log(o);                             //0

var p = 200;
p*=200;
console.log(p);                             //40000

var r = 200;
r/=200;
console.log(r);                             //1

var string = 'olya';
console.log(string + ' olya');              //olya olya


// оператори порівняння


console.log(5>10);                      //Returns false
console.log(5<10);                      //Returns true
console.log(10>=10);                    //Returns true
console.log(8<=10);                     //Returns true
console.log(10===10);                   //Returns true
console.log(10!==10);                   //Returns false


const userName = 'Mark';
const discount = userName === "Mark"
    ?'30%'
    : '0%';
console.log('congats your discount is ' + discount);


//тернарний оператор

const MATH_PI = 3.14;
const radius = 10;
const formula = 'circumference';

const result = formula === 'circumference'
	? MATH_PI * (2 * radius)
	: MATH_PI * (radius * radius);
console.log(result);                                      //62.800000000000004



//побітові операції
const MATH_PI2 =3.14;
const radius2 = 1000;

let result2;
const res2 = radius2 !== 0 && MATH_PI2 ===3.14
? MATH_PI2 * (radius2*radius2)
: 'radius can not be equal to zero and math pi should be correct';

const checkRadius2 = radius2 ===10|| radius2 <100? 'Ok' : 'Not ok';             //Not ok
console.log(checkRadius2);                                                      //False


// коментарі в коді

const varVar = 'varVar';
const a = 10;
const b = 11;
const c1 = 12;
/*
 * коментар
 * 
 * */
const _d = 13;


// умовні конструкції
function testNum(a){
    let result;
    if (a < 0) {
        result = 'negative'
    }
    else if (a === 0) {
        result = "zero"
    }
    else {
        result = 'positive'
    }
    return result;
    }
    console.log(testNum(-5));                               //Negative

  
    
const Dad = {
    name: 'Andrew', // property
    age: 50,
    hasDaughter: false
}

console.log("Dad's name is ", Dad.name);
console.log("Dad's age is ", Dad.age);

if (Dad.hasDaughter) {
   console.log("Dad has daughter");                          // Is absent due to 108-false
}    


//switch...case
const day = 1;
let weekDay = ' ';

switch (day) {
    case 1:{
      weekDay = 'Monday';
      console.log('Monday');
    }
    break;

    case 2: {
    weekDay = 'Tuesday';
    console.log('Tuesday');
    }
    break;

default:{
    console.error('You provided wrong number');
    }
}
console.log('weekday: ' , weekDay);                             //Monday


