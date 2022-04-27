function makeAnimal(name) {
  return {
    name: name,
    move() {
      console.log(`Moving!`);
    },

    greet() {
      console.log(`My name is ${this.name}!`);
    }
  };
}

function makeDog(name, species) {
  let dog = makeAnimal(name);
  dog.species = species;
  dog.move = function() {
    console.log(`Trotting!`);
  };

  return dog;
}

function makeFish(name, species) {
  let fish = makeAnimal(name);
  fish.species = species;
  fish.move = function() {
    console.log('Swimming~~');
  };

  return fish;
}