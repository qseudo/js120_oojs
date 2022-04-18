class Cat {
  constructor(name) {
    this.name = name;
  }

  rename(name) {
    this.name = name;
  }
}

let kitty = new Cat('Sophie');
console.log(kitty.name); // Sophie
kitty.rename('Chloe');
console.log(kitty.name); // Chloe

let CatPrototype = {
  init(name) {
    this.name = name;
    return this;
  },

  rename(name) {
    this.name = name;
  }
};

let kitty2 = Object.create(CatPrototype).init('Sophie');
console.log(kitty2.name);
kitty2.rename('Chloe');
console.log(kitty2.name);