/*
must have cat constructor in prototype chain so instanceof returns true
can't call the constructor

*/
let CatPrototype = {
  init(name) {
    this.name = name;
    return this;
  },

  speaks() {
    return `${this.name} says meowwww.`;
  },
};

let fakeCat = Object.create(CatPrototype).init('Genie');

console.log(CatPrototype.isPrototypeOf(fakeCat)); // logs true
console.log(fakeCat.name);           // logs undefined
console.log(fakeCat.speaks());       // logs undefined says meowwww.