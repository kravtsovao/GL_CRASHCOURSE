// objects
// створення об'єктів

// *with an object literal
const dog1 = { };
console.log(dog1);

// *with properties
const dog2 = { 
   friendly: true,
   speak: () => console.log("Woof! Woof!"),
};
console.log(dog2);
 // adding new property name
 dog2.name = "Rex";
 // adding new method
console.log(dog2.name);
console.log(dog2);
delete dog2.speak;
console.log(dog2);

// *with constructor
const dog3 = new Object();
console.log(dog3);
const dog = { 
    friendly: true,
    speak: () => console.log("Woof! Woof!"),
 };
 
 //    МЕТОД obj.valueOf()
 console.log(dog.valueOf());
 
 //         МЕТОД obj.hasOwnProperty('propName')
 console.log(dog.hasOwnProperty('speak'));
 console.log(dog.hasOwnProperty('likesIcecream'));
 
 //    МЕТОД obj.toString()
 console.log(dog.toString());


///////// 
 const Marvel = {
    yearCreation: 1939,
    maunCharacter: 'Spider Man',
    mainTeam: "Avengers",
};
const DC = {
    yearCreation: 2013,
    maunCharacter: 'Batman',
    mainTeam: 'Justiace League',
}
if (DC.yearCreation !== 1934) {
    DC.yearCreation = 1934
}
console.log(DC);
console.log(Marvel);
Marvel.owner = 'Disney';
console.log(Marvel);

Marvel['owner' ] = 'Dis';
console.log(Marvel);

const newField = 'owner';
Marvel[newField] = 'diss';
console.log(Marvel);

//         МЕТОД obj.hasOwnProperty('propName') 
if (!DC.hasOwnProperty('owner')){
    DC[newField] = 'Warner';

}

///////////  МЕТОД Object.freeze()
Object.freeze(DC);
DC.v = '1.0';
DC.yearCreation = 2021;
console.log(DC);

//////// МЕТОД Object.isFrozen(obj)
console.log(Object.isFrozen(DC));       //true

//////// МЕТОД Object.isisExtensible(obj)
console.log(Object.isExtensible(DC));   //false

//////// МЕТОД Object.assigh(obj)
const MarvelKiller = Object.assign({}, Marvel);
MarvelKiller.better = true;
console.log(MarvelKiller);
 
//////////////////////////////  МЕТОД Object.create()
const Cat = {
    isCat: true,
    printIntro: function() {
      console.log(`Pet's name is ${this.name}. Is she cat? ${this.isCat}`);
    }
  };
  const Pet = Object.create(Cat);
  Pet.name = 'Leila'; 
  Pet.isCat = true; 
  Pet.printIntro();

//////////////      МЕТОД Object.assign
const classA = { red: 5, blue: 2 };
const classB = { blue: 4, coral: 5 };
//           <- classA <- classB
const returnedclassA= Object.assign(classA, classB);
console.log(classA);//red: 5, blue: 4, coral: 5
console.log(returnedclassA); //red: 5, blue: 4, coral: 5

//////////////      МЕТОД Object.assign
const user = {
    name: "David",
    age: 33,
    hasWife: true,
    hasSon: false,
  };
console.log(Object.entries(user));
const classC = {
    girls: 23,
    boys: 10,
  };
  for (const [key, value] of Object.entries(classC)) {
    console.log(`${key}: ${value}`);
  }
 

  /////  lecture 4

  const Marvel2 = {
    yearCreation: 1939,
    maunCharacter: 'Spider Man',
    mainTeam: "Avengers",
};
function extendObject (obj, field, value) {
    const newObj = Object.assign({}, obj);//беремо значення з Marvel2
    newObj[field] = value;//додаємо нове поле
    return newObj;
}
const newMarvel2 = extendObject(Marvel2, 'mainVillain' , 'Venom');//Marvel2 + нове поле + нове значення
console.log('newMarvel2 object:' , newMarvel2);


/// варіанти функції declaration
const square = (number) => {
    return number * number;
};
const square2 = (number) => number*number;

console.log(square(10));//100
console.log(square2(3));//9


////anonympus function
const result = function (m, n) {
    return m * n};
let l = result(2, 8);
console.log(l); //16

// IIFE
var result1 = (function () {
    var name = "Katty";
    return name;
})();
console.log(result1); // Katty

//callback function
function chooseDish() {
    console.log("Salad");
  }
  function chooseName() {
    console.log("Caesar");
  }
  chooseDish();//Salad
  chooseName();//Caesar

  //classes
  class myDogs {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
    sayHello() {
      return "Hello! My name is " + this.name + " and I am a " + this.type;
    }
  }
  const Dog = new myDogs("Felix", "dog");
  console.log(Dog.sayHello());
  const Dog2 = new myDogs("Beethoven", "dog2");
  console.log(Dog2.sayHello());

  ///class shop
  class shop {
    constructor(name, year, type) {
      this.name = name;
      this.year = year;
      this.type = type;
    }
    welcome () {
      return "Welcome to " + this.name + this.type + "since " + this.year + "which located on " + this.location + " street";
    }
  }
  const shop1 = new shop("Asos ", "1999", "Stuff ");
  console.log(shop1.welcome());
  const shop2 = new shop("Minimal ", "2019", "Jewellery ");
  console.log(shop2.welcome());
  const shop3 = new shop("Medicine ", "2013 ", "Clothes ");
  shop3.location = "Horodotska"
  console.log(shop3.welcome()); // Welcome to Medicine Clothes since 2013 which located on Horodotska street




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