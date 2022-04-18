// name property added to make objects easier to identify
let foo = {
  name: 'foo',
  ancestors() {
    /**
    input: n/a, object calling method
    output: array of strings

    let self = this;
    Object.getPrototypeOf(qux) => { name: 'baz' }

    - create an empty array []
    - set `self` to the `this`

    - while the prototype of this object is truthy
      - if the prototype is `Object.prototype`
        - then push the string
          'Object.prototype' to the string
      - else
        - add the name of the prototype object to []

      - reassign `self` to be the prototype object

    - return the result array
     */
    let self = this;
    let result = [];

    while (Object.getPrototypeOf(self)) {
      let currentProto = Object.getPrototypeOf(self);

      if (currentProto === Object.prototype) {
        result.push('Object.prototype');
      } else {
        result.push(currentProto.name);
      }

      self = currentProto;
    }

    console.log(result);
  },
};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']