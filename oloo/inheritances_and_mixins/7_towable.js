let towMixin = {
  tow() {
    return `I can tow a trailer!`;
  },
};

class Truck {}
Object.assign(Truck.prototype, towMixin);

class Car {}

let truck = new Truck();
console.log(truck.tow());

const TruckPrototype = {};
Object.assign(TruckPrototype, towMixin);

const CarPrototype = {};

let truck2 = Object.create(TruckPrototype);
console.log(truck2.tow());