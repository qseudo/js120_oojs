class Cat {
  static genericGreeting() {
    console.log(`Hello! I'm a cat!`);
  }
}

Cat.genericGreeting();

let CatPrototype = {
  init() {},

  genericGreeting() {
    console.log(`Hello, I'm a cat!`);
  }
};

CatPrototype.genericGreeting();