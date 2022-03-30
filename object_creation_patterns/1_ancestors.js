// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

foo.ancestors = function() {
  const result = [];
  let self = this;

  while (Object.getPrototypeOf(self)) {
    if (Object.getPrototypeOf(self) === Object.prototype) {
      result.push('Object.prototype');
    } else {
      result.push(Object.getPrototypeOf(self).name);
    }

    self = Object.getPrototypeOf(self);
  }

  console.log(result);
};

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']