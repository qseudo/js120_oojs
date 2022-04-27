// function foo(x) {
//   if (!(this instanceof foo)) return new foo(x);
//   this.x = x;
// }

function foo(x) {
  let obj = Object.create(foo.prototype);
  obj.x = x;
  return obj;
}

foo.prototype.bar = function() {
  console.log(this.x);
};

let obj1 = new foo(1);
let obj2 = foo(2);

obj1.bar();
obj2.bar();