class Vehicle {
  startEngine() {
    return 'Ready to go!';
  }
}

class Truck extends Vehicle {
  startEngine(speed) {
    return super.startEngine() + ` Drive ${speed}, please!`;
  }
}

let truck1 = new Truck();
console.log(truck1.startEngine('fast'));

let truck2 = new Truck();
console.log(truck2.startEngine('slow'));

let VehiclePrototype = {
  startEngine() {
    return `Ready to go!`;
  }
};

let TruckPrototype = Object.create(VehiclePrototype);
TruckPrototype.startEngine = function(speed) {
  return VehiclePrototype.startEngine() + ` Drive ${speed}, please!`;
};

let truck3 = Object.create(TruckPrototype);
console.log(truck3.startEngine('fast'));

let truck4 = Object.create(TruckPrototype);
console.log(truck4.startEngine('slow'));