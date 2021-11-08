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
 