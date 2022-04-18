class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year, bedType) {
    super(year);
    this.bedType = bedType;
  }
}

class Car extends Vehicle {}

let truck1 = new Truck(2003, 'Short');
console.log(truck1.year);
console.log(truck1.bedType);

const VehiclePrototype = {
  init(year) {
    this.year = year;
    return this;
  },
};

const TruckPrototype = Object.create(VehiclePrototype);
TruckPrototype.init = function(year, bedType) {
  const truck = VehiclePrototype.init.call(this, year);
  truck.bedType = bedType;
  return truck;
};

const CarPrototype = Object.create(VehiclePrototype);

let truck2 = Object.create(TruckPrototype).init(2003, 'Short');
console.log(truck2.year);
console.log(truck2.bedType);