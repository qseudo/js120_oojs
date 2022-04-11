let walkMixIn = {
  walk() {
    return `${this.name} ${this.gait()} forward`;
  },
};

let PersonPrototype = {
  init(name) {
    this.name = name;
    return this;
  },

  gait() {
    return `strolls`;
  },
};

Object.assign(PersonPrototype, walkMixIn);

let CatPrototype = {
  init(name) {
    this.name = name;
    return this;
  },

  gait() {
    return `saunters`;
  },
};

Object.assign(CatPrototype, walkMixIn);

let CheetahPrototype = {
  init(name) {
    this.name = name;
    return this;
  },

  gait() {
    return `runs`;
  },
};

Object.assign(CheetahPrototype, walkMixIn);

let mike = Object.create(PersonPrototype).init('Mike');
console.log(mike.walk());

let kitty = Object.create(CatPrototype).init('Kitty');
console.log(kitty.walk());

let flash = Object.create(CheetahPrototype).init('Flash');
console.log(flash.walk());