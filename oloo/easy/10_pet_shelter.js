let PetPrototype = {
  init(species, name) {
    this.species = species;
    this.name = name;
    return this;
  },
};

let OwnerPrototype = {
  init(name) {
    this.name = name;
    this.pets = [];
    return this;
  },

  numberOfPets() {
    return this.pets.length;
  },

  addPet(pet) {
    this.pets.push(pet);
  }
};

let ShelterPrototype = {
  init() {
    this.owners = [];
    this.unadoptedPets = [];
    return this;
  },

  adopt(owner, pet) {
    owner.addPet(pet);

    if (!this.owners.includes(owner)) this.owners.push(owner);
  },

  printAdoptions() {
    this.owners.forEach(owner => {
      console.log(`${owner.name} has adopted the following pets:`);
      owner.pets.forEach(pet => {
        console.log(`a ${pet.species} named ${pet.name}`);
      });
    });
  },

  intake(pet) {
    this.unadoptedPets.push(pet);
  },

  numberOfUnadoptedPets() {
    return this.unadoptedPets.length;
  },

  printUnadoptedPets() {
    console.log(`The Animal shelter has the following unadopted pets:`);
    this.unadoptedPets.forEach(pet => {
      console.log(`a ${pet.species} named ${pet.name}`);
    });
  }
};

let butterscotch = Object.create(PetPrototype).init('cat', 'Butterscotch');
let pudding      = Object.create(PetPrototype).init('cat', 'Pudding');
let darwin       = Object.create(PetPrototype).init('bearded dragon', 'Darwin');
let kennedy      = Object.create(PetPrototype).init('dog', 'Kennedy');
let sweetie      = Object.create(PetPrototype).init('parakeet', 'Sweetie Pie');
let molly        = Object.create(PetPrototype).init('dog', 'Molly');
let chester      = Object.create(PetPrototype).init('fish', 'Chester');

let asta = Object.create(PetPrototype).init('dog', 'Asta');
let laddie = Object.create(PetPrototype).init('dog', 'Laddie');
let fluffy = Object.create(PetPrototype).init('cat', 'Fluffy');
let kat = Object.create(PetPrototype).init('cat', 'Kat');
let ben = Object.create(PetPrototype).init('cat', 'Ben');
let chatterbox = Object.create(PetPrototype).init('parakeet', 'Chatterbox');
let bluebell = Object.create(PetPrototype).init('parakeet', 'Bluebell');

let phanson = Object.create(OwnerPrototype).init('P Hanson');
let bholmes = Object.create(OwnerPrototype).init('B Holmes');

let shelter = Object.create(ShelterPrototype).init();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);

shelter.intake(asta);
shelter.intake(laddie);
shelter.intake(fluffy);
shelter.intake(kat);
shelter.intake(ben);
shelter.intake(chatterbox);
shelter.intake(bluebell);

shelter.printUnadoptedPets();
shelter.printAdoptions();

console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
console.log(`This Animal shelter has ${shelter.numberOfUnadoptedPets()} unadopted pets.`);