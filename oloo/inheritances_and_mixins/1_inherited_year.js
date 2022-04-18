class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {}
class Car extends Vehicle {}

let truck = new Truck(2003);
console.log(truck.year); // 2003

let car = new Car(2015);
console.log(car.year); // 2015

let VehiclePrototype = {
  init(year) {
    this.year = year;
    return this;
  },
};

let CarPrototype = Object.create(VehiclePrototype);
CarPrototype.init = function(year) {
  return VehiclePrototype.init.call(this, year);
};

let TruckPrototype = Object.create(VehiclePrototype);
TruckPrototype.init = function(year) {
  return VehiclePrototype.init.call(this, year);
};

let truck2 = Object.create(TruckPrototype).init(2003);
console.log(truck2.year);

let car2 = Object.create(CarPrototype).init(2015);
console.log(car2.year);

console.log(CarPrototype.isPrototypeOf(car2));
console.log(VehiclePrototype.isPrototypeOf(car2));