class Pet {
  constructor(name, age, fur) {
    this.name = name;
    this.age = age;
    this.fur = fur;
    console.log('Pet constructor was used');
  }
}

class Cat extends Pet {
  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.fur} fur.`;
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.constructor);

console.log(pudding.info());
console.log(butterscotch.info());