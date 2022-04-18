class Cat {
  constructor(name) {
    this.name = name;
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let CatPrototype = {
  init(name) {
    this.name = name;
    console.log(`Hello! My name is ${this.name}!`);
    return this;
  }
};

let kitty1 = new Cat('Sophie');
let kitty2 = Object.create(CatPrototype).init('Sophie');