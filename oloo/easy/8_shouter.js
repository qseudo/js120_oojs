let PersonPrototype = {
  init() {
    return this;
  },

  greeting(text) {
    console.log(text);
  },
};

let ShouterPrototype = Object.create(PersonPrototype);

ShouterPrototype.init = function() {
  PersonPrototype.init.call(this);
  return this;
};

ShouterPrototype.greeting = function(text) {
  PersonPrototype.greeting.call(this, text.toUpperCase());
};

let person = Object.create(PersonPrototype).init();
let shouter = Object.create(ShouterPrototype).init();

person.greeting(`Hello. It's very nice to meet you.`);
shouter.greeting(`Hello my friend.`);