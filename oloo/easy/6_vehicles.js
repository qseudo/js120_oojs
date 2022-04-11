let VehiclePrototype = {
  init(make, model) {
    this.make = make;
    this.model = model;
    return this;
  },

  info() {
    return `${this.make} ${this.model}`;
  },
};

let CarPrototype = Object.create(VehiclePrototype);

CarPrototype.init = function(make, model) {
  VehiclePrototype.init.call(this, make, model);
  return this;
};

CarPrototype.getWheels = function() {
  return 4;
};

let MotorcyclePrototype = Object.create(VehiclePrototype);

MotorcyclePrototype.init = function(make, model) {
  VehiclePrototype.init.call(this, make, model);
  return this;
};

MotorcyclePrototype.getWheels = function() {
  return 2;
};

let TruckPrototype = Object.create(VehiclePrototype);

TruckPrototype.init = function(make, model, payload) {
  VehiclePrototype.init.call(this, make, model);
  this.payload = payload;
  return this;
};

TruckPrototype.getWheels = function() {
  return 6;
};

let car = Object.create(CarPrototype).init('car', 'oloo');
let motorcycle = Object.create(MotorcyclePrototype).init('motorcycle', 'oloo');
let truck = Object.create(TruckPrototype).init('truck', 'oloo', 'a lot lol');

console.log(car.info());
console.log(motorcycle.info());
console.log(`${truck.info()} ${truck.payload}`);