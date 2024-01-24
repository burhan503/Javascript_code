class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.sound} this is the sound  of this ${this.name}animal`);
    }
}
// Child class inherit from Animal
class Dog extends Animal {
    constructor(name, breed) {
        // call the constructor the parent class is Animal
        super(name, 'Wolf');
        this.breed = breed;
    }
    // Override the makeSound method of the parent class
    makeSound() {
        console.log(`${this.name} barks: ${this.sound}`);
    }
    fetch() {
        console.log(`${this.name} is fetching the ball!`);

    }
}
// create instance of classes 
const makemysound = new Animal('Pink Persian cat', 'Maaow Maaow');
const myDog = new Dog('buddy','Golden Retriever');
makemysound.makeSound();
myDog.makeSound();