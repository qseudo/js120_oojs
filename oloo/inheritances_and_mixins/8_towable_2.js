const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
};

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {}
Object.assign(Truck.prototype, towMixin);

class Car extends Vehicle {}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);

const VehiclePrototype = {
  init(year) {
    this.year = year;
    return this;
  },
};

const TruckPrototype = Object.create(VehiclePrototype);
Object.assign(TruckPrototype, towMixin);

const CarPrototype = Object.create(VehiclePrototype);

let truck2 = Object.create(TruckPrototype).init(2002);
console.log(truck2.year);
console.log(truck2.tow());

let car2 = Object.create(CarPrototype).init(2015);
console.log(car2.year);