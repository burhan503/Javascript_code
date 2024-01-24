//Simple example of using classes and Inheritance in JavaScript
class Animal{
    constructor(name,sound){
        this.name = name;
        this.sound = sound;
    }
    makeSound(){
        console.log(` this is the name ${this.name} & this is the Sound ${this.sound}`);
    }
}
// child class inherit from Animal
class Dog extends Animal{
    constructor(name, breed){
     // ca;; the constructor the parent class is Animal
     super(name,' WOLF');
     this.breed= breed;
    }
    // Overrite the MakeSound method of the Parent class 
    makeSound(){
        console.log(`this is the name ${this.name} & this is the Sound ${this.sound}`);
    }
    fetch(){
        console.log(`this is the name ${this.name} is fetching the ball ~~`);
    }
}
// create instance of classes 
const make_Sound_Key = new Animal('Black Persion Cat',' Maaw');
const MyDog = new Dog(' Buddy',' Golden Retriever');
make_Sound_Key.makeSound();
MyDog.makeSound();
console.log('All Set');