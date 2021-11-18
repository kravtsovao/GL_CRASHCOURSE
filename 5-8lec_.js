//lec 5


// пустий масив
let emptyArray = [];
emptyArray = [1,3,4]
console.log(emptyArray)

// масив чисел
const numsArray = [1, 2, 3, 4];
console.log(numsArray)

// масив зі слів
const strArray = ['one', 'two', 'three'];

// масив з різними типами даних
const mixArray = ['a', 'b', 1, 2, 3, { num: 1 }, [0,1,2,3,4]];
console.log(mixArray)
console.log(mixArray[3])//  доступ через індекс


// використання класу array
const names = new Array();
names.push('Denis');
names.push('Ivan');
names.push('Oleh');
console.log(names);


// push, pop, sshift, unshift, concat, reverse

const cats = ['Bobbi'];
cats.push('Lana');
cats.push('Puffy', 'Elle'); 
console.log(cats)
console.log(cats.length)
cats.pop();
console.log(cats)
cats.shift();
cats.unshift('Bobbi')
console.log(cats)
const dogs = ['Blake', 'Charls'];
pets = cats.concat(dogs);
console.log(pets);

const colors = ["red", "blue", "black"];
console.log(colors.reverse())


//lec 6
// цикл for
let sum = 0;
for (let i = 0; i <= 20; i++) {
  sum = sum + i;
}
console.log(sum);


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let week = '';
for (let i = 0; i < days .length; i++) {
    week += days [i] + ' ';
}
console.log(week);

//for ...in
const numbers = [5, 6, 7, 8, 9];
let txt = "";
for (let key in numbers) {
  txt += numbers[key] + ',';
}
console.log(txt)

//while
const nums = [11, 22, 33, 44, 55, 66];
let n = 0;
let suma = 0;
while (n < nums.length) {
  suma = suma + nums[n];
  n++;
}
console.log(suma);


// do...while
let result = '';
let i = 0;
do {
   i += 1;
   result += i + ' ';
}
while (i > 0 && i < 10);
console.log(result);


const arr = [
    { girl: 'Olha' },
    { girl: 'Olena' },
    { girl: 'Orysia' },
   ];
   function congratulates(name) {
     return "Happy birthday, " + name + "!";
   }
   for (let i = 0; i < arr.length; i++) {
     console.log(congratulates(arr[i].girl));
}

//lec 7

//foreach
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumNums = 0;
numArr.forEach((num, index) => {
    sumNums += num;
})
console.log(sumNums);

//sort
const myArray = [6, 8, 9, 3, 2];
myArray.sort(
  (curr, next) => {
    if (curr < next) {
      return -1;
    }
  }
); 
console.log(myArray.sort())

//map()
function myFunction(num) {
  return num * 10;
}
const numbersArr = [6, 4, 3, 5];
const newArr = numbersArr.map(myFunction)
console.log(newArr);

//filter
const myarr = [1, 2, 3, 4, 3, 6];
const filteredMyarr = myarr.filter((num) => num !== 1 && num !== 4 );
console.log(filteredMyarr);

//indexof
const yourColor = ['white', 'brown', 'yellow', 'orange'];
console.log(yourColor.indexOf('white'));


//reduce
const items = [
    { a: 3, b: 30 },
    { a: 6, b: 3 },
    { a: 10, b: 17},
  ];
  const filteredItems = items.reduce((acc, item) => {
    if (item.a >= 6) {
      acc.push({
        a: item.a,
        b: item.b,
        sum: item.a + item.b,
      })
    }
    return acc;
  }, []);
  console.log(filteredItems);

  //sort
  function sortArray(array) {
    array.sort((curr, next) => {
      if (curr < next) {
        return -1;
      }
    });
    return array;
  }
  const needSort = [3, 5, 7, 9, 58]
  console.log(sortArray(needSort))

  //slice
const numsSlice = [0, 1, 2, 3, 4, 5];
const slicedNums = numsSlice.slice(1, 3);
console.log(slicedNums);

  //join
const words = ['Happy', 'birthday', 'to', 'you'];
const wordsinStr = words.join(' ');
console.log(wordsinStr);

//lec 8

//об'єднання
const words_ = {
    name1: 'Oleh',
    name2: 'Peter',
  };
  const helloString = 'Hello, ' + words_.name1 + ', ' + words_.name2 + '!';
  console.log(helloString);



const interestingResult = '6' + 9 - 6;
console.log(interestingResult);


//тернарний оператор
const year = 0 ;
const family = 'brother';
const resultB = `I have ${year > 0 ? year: 'zero'}  ${family}`;
console.log(resultB);

//match
const toRegex = 'The harder You work the better You get.';
const regex = /[A-Z]/g;
const found = toRegex.match(regex);
console.log(found);

// trim
const toTrim = '      The harder You work the better You get.   ';
console.log(toTrim.trim());
// output: "Hello world!";


//split
let strS = 'hi-dear-friend';
let arrS = strS.split('-');
console.log(arrS);

//splice
const strSplice = 'The harder you work the better you get.';
console.log(strSplice.slice(19));
console.log(strSplice.slice(4, 19));
console.log(strSplice.slice(-7, -5));


//tolowervase
function convertToLowercase(array) {
    const changed = array.map((array) => array.toLowerCase());
    return changed;
  }
const up = ['MY NAME IS DAVID'];
console.log(convertToLowercase(up));

