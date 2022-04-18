class Cat {
  constructor() {
    console.log(`I'm a cat!`);
  }
}

let CatPrototype = {
  init() {
    console.log(`I'm a cat!`);
    return this;
  }
};

let kitty1 = new Cat();
let kitty2 = Object.create(CatPrototype).init();