let Rectangle = {
  init(width, length) {
    this.width = width;
    this.length = length;
    return this;
  },

  getWidth() {
    return this.width;
  },

  getLength() {
    return this.length;
  },

  getArea() {
    return this.length * this.width;
  },
};

let SquarePrototype = Object.create(Rectangle);

SquarePrototype.init = function(side) {
  return Rectangle.init.call(this, side, side);
};

let rect = Object.create(Rectangle).init(4, 5);

let square = Object.create(SquarePrototype).init(5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20

console.log(square.getWidth()); // 4
console.log(square.getLength()); // 5
console.log(square.getArea()); // 20

console.log(SquarePrototype.isPrototypeOf(square));

function makeRectangle(length, width) {
  return {
    length: length,
    width: width,

    getWidth() {
      return this.width;
    },

    getLength() {
      return this.length;
    },

    getArea() {
      return this.getWidth() * this.getLength();
    },
  };
}

let ffrect = makeRectangle(4, 5);
console.log(ffrect.getWidth());
console.log(ffrect.getLength());
console.log(ffrect.getArea());

function makeSquare(side) {
  return Object.create(makeRectangle(side, side), {
    getArea: function() {
      return `Square: ${this.length * this.width}`;
    }
  });
}

let ffsqr = makeSquare(5);
console.log(ffsqr.getWidth());
console.log(ffsqr.getLength());
console.log(ffsqr.getArea());