let AnimalPrototype = {
  init(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
    return this;
  },

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
};

let CatPrototype = Object.create(AnimalPrototype);

CatPrototype.init = function(name, age, status) {
  AnimalPrototype.init.call(this, name, age, 4, 'cat', status);
  return this;
};

CatPrototype.introduce = function() {
  return `${AnimalPrototype.introduce.call(this)} Meow meow!`;
};

let DogPrototype = Object.create(AnimalPrototype);

DogPrototype.init = function(name, age, status, master) {
  AnimalPrototype.init.call(this, name, age, 4, 'dog', status);
  this.master = master;
  return this;
};

DogPrototype.greetMaster = function() {
  return `Hello ${this.master}! Woof, woof!`;
};

let cat = Object.create(CatPrototype).init('Pepe', 2, 'happy');
let dog = Object.create(DogPrototype).init('Gucci', 11, 'happy', 'Cal');

console.log(cat.introduce());
console.log(dog.greetMaster());