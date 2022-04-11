let PetPrototype = {
  initPet(name, age) {
    this.name = name;
    this.age = age;
    return this;
  },
};

let CatPrototype = Object.create(PetPrototype);

CatPrototype.initCat = function(name, age, fur) {
  this.initPet(name, age);
  this.fur = fur;

  return this;
};

CatPrototype.info = function() {
  return `My cat ${this.name} is ${this.age} years old and has ${this.fur} fur.`;
};

let pudding = Object.create(CatPrototype).initCat('Pudding', 7, 'black and white');
let butterscotch = Object.create(CatPrototype).initCat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());