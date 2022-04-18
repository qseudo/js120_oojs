class Person {
  constructor(name = 'John Doe') {
    this.name = name;
  }
}

let PersonPrototype = {
  init(name = 'John Doe') {
    this.name = name;
    return this;
  }
};

let person1 = new Person();
let person2 = new Person('Pepe');

let person3 = Object.create(PersonPrototype).init();
let person4 = Object.create(PersonPrototype).init('Pepe');

console.log(person1.name);
console.log(person2.name);
console.log(person3.name);
console.log(person4.name);
