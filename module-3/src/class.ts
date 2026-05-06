// oop - class - object

// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(`${this.name} is making ${this.sound}`);
//   }
// }

// parameter properties

class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string,
  ) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} is making ${this.sound}`);
  }
}

const dog = new Animal("Doges Vai", "Dog", "Ghew ghew");
dog.makeSound();
