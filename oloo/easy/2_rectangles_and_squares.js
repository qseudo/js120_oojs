let Rectangle = {
  initialize(width, length) {
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

let Square = Object.create(Rectangle);

Square.init = function(side) {
  return this.initialize(side, side);
};

let sqr = Object.create(Square).init(5);
console.log(`area of square = ${sqr.getArea()}`); // area of square = 25

console.log(Square.isPrototypeOf(sqr));