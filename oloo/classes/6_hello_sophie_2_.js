class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let CatPrototype = {
  init(name) {
    this.name = name;
    return this;
  },

  greet() {
    console.log(`Hello! My name is ${this.name}!`);
  }
};

let kitty1 = new Cat('Sophie');
kitty1.greet();

let kitty2 = Object.create(CatPrototype).init('Sophie');
kitty2.greet();