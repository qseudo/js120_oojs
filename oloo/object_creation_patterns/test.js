let armorMixIn = {
  attachArmor() {
    console.log('Armor on!');
  },

  removeArmor() {
    console.log('Armor off!');
  }
};

let spellMixIn = {
  castSpell(spellName) {
    console.log(`Casting ${spellName}!`);
  }
};

class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.strength = this.rollDice();
    this.intelligence = this.rollDice();
  }

  rollDice() {
    return Math.floor(Math.random() * 11) + 2;
  }

  heal(amount) {
    this.health += amount;
  }

  hurt(amount) {
    this.health -= amount;
  }
}

class Warrior extends Character {
  constructor(name) {
    super(name);
    this.strength += 2;
  }
}

Object.assign(Warrior.prototype, armorMixIn);

class Paladin extends Character {}

Object.assign(Paladin.prototype, armorMixIn);
Object.assign(Paladin.prototype, spellMixIn);


class Magician extends Character {
  constructor(name) {
    super(name);
    this.intelligence += 2;
  }
}

Object.assign(Magician.prototype, spellMixIn);

class Bard extends Magician {
  createPotion() {
    console.log('Creating potion...');
  }
}