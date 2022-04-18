class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
    this.startEngine();
  }

  startEngine() {
    console.log('Ready to go!');
  }
}

let truck = new Truck(2003);
console.log(truck.year); // 2003

let VehiclePrototype = {
  init(year) {
    this.year = year;
    return this;
  },
};

let TruckPrototype = Object.create(VehiclePrototype);

TruckPrototype.init = function(year) {
  const truck = VehiclePrototype.init.call(this, year);
  truck.startEngine();
  return truck;
};

TruckPrototype.startEngine = function() {
  console.log(`Ready to go!`);
};

let truck2 = Object.create(TruckPrototype).init(2003);
console.log(truck2.year);