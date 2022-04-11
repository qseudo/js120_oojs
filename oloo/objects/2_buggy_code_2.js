let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;

    return this.price - discount;
  },
};

console.log(item.discount(20));
console.log(item.discount(50));
console.log(item.discount(25));

/**
 Line 1 declares a global variable `item` that references an object created
 with object literal syntax. The object has 5 properties, one of them a method.
 The method, `discount`, takes one argument that is used to determine the price
 of the item after its discounted by the value of the argument. Within the
 the method body, the value of `this.price`, is subtracted by the discount
 amount. This mutates the property `price` of the object. Then the method
 returns the value of the property. However, this means that when the method
 is called again, it's using the previously mutated value of the `price
 property instead of its original intended value.

 To fix this code, we can remove lines 8-10 and replace it with:
 `return this.price - discount` to return the price with the discount without
 mutating the properties.
 */