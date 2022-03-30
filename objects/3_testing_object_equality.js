function objectsEqual(obj1, obj2) {
  /*
  input: 2 different objects
  output: boolean

  rules:
    -returns true if objects have same key value pairs
    -returns false otherwise

  Object.keys(obj1) => ['a']
  iterate through each key,

  -save the variable `keys` to the keys of obj that has more keys
  -iterate through the keys
    -if obj2 has the key and the value of the key is the same as obj1
      -continue
    -else
      -return false
  -return true
  */

  const keys = Object.keys(obj1).length > Object.keys(obj2).length ?
    Object.keys(obj1) : Object.keys(obj2);

  for (let idx = 0; idx < keys.length; idx += 1) {
    let key = keys[idx];

    if (obj2.hasOwnProperty(key) && (obj1[key] === obj2[key])) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false