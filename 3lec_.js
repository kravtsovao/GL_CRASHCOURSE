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

