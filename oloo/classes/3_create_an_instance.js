class Cat {
  constructor() {}
}

let CatPrototype = {
  init() {
    return this;
  }
};

let kitty1 = new Cat();
let kitty2 = Object.create(CatPrototype).init();

console.log(kitty1);
console.log(kitty2);