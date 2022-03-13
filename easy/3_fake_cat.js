class Cat {
  constructor(name) {
    this.name = name;
  }
}

Cat.prototype.speaks = function() {
  return `${this.name} says meowwww.`;
};

let fakeCat = Object.create(Cat.prototype);
console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.name);           // logs undefined
console.log(fakeCat.speaks());       // logs undefined says meowwww.