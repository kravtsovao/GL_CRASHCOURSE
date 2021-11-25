//oop

//encapsulation
function Chocolate() {
    let Name = "";
    this.price = "";
    this.setName = function (name) {
        Name = name;
    };
    this.getName = function () {
        return Name;
    };
}
let chocolate1 = new Chocolate();
chocolate1.price = 65;
console.log(chocolate1.price);
chocolate1.setName("Ritter Sport");
console.log(chocolate1.getName());
console.log(chocolate1.Name); //undefined


//Inheritance
function Brand(name) {
    this.name = name;
    this.getName = () => this.name;
    this.country = () => this.name === "Montale" ? console.log("Brand " + this.name + " is from France.") : console.log("Brand " + this.name + "is from Italy.");
}
const Montale = new Brand('Montale');
const Carthusia = new Brand('Carthusia');
Montale.country();
Carthusia.country();


//polymorphism
class Animal {
    constructor(name, age, color, gender) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.gender = gender;
    }
    sound() { return ''; }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}
class Dog extends Animal {
    constructor(name, age, color, gender) {
        super(name, age, color, gender);
    }
    sound() {
        return 'Woof!';
    }
}
class Cat extends Animal {
    constructor(name, age, color, gender) {
        super(name, age, color, gender);
    }
    sound() {
        return 'Meow!';
    }
}
class Mouse extends Animal {
    constructor(name, age, color, gender) {
        super(name, age, color, gender);
    }
    sound() {
        return 'Peee!';
    }
}
class Horse extends Animal {
    constructor(name, age, color, gender) {
        super(name, age, color, gender);
    }
    sound() {
        return 'Neigh!';
    }
    eatGrass() {
        return true;
    }
}
class Lemur extends Animal {
    constructor(name, age, color, gender) {
        super(name, age, color, gender);
    }
    sound() {
        return 'Hmmm!';
    }
}
const Rex = new Dog('Rex', 8, 'brown', 'male');
console.log(Rex.sound());
console.log("My dog's name is " + Rex.name + ". It is " + Rex.gender + ". He is " + Rex.color + " and he is " + Rex.age + " years old.");
const Murka = new Cat('Murka', '11');
console.log(Murka.sound(), Murka.age);
const Jerry = new Mouse('Jerry', 1, 'grey');
console.log(Jerry.sound(), Jerry.color);
const Ilian = new Horse('Ilian');
console.log(Ilian.sound(), Ilian.eatGrass());
const Demur = new Lemur('Demur', 5);
console.log(Demur.sound(), Demur.age);


//prototypes
function Snake(name, color) {
    this.name = name;
    this.color = color;
}
Snake.prototype.poisonous = function () {
    this.name === "Lina" ? console.log("I’m " + this.name + " and I'm not poisonous") : console.log("I’m " + this.name + " and I'm poisonous");
};
Snake.prototype.sound = function () {
    console.log("Shhh!");
};
const Lina = new Snake("Lina", "black");
const Luna = new Snake("Luna", "white");
Luna.poisonous();
Lina.poisonous();
Luna.sound();