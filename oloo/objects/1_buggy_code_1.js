/* eslint-disable max-lines-per-function */
function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${morning} ${name}`;
          break;
        case 'afternoon':
          msg += `${afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}

/*
On line 2, a factory function named `createGreeter` is declared
with 1 parameter, `name`. It explicitly returns an object with the
argument that is passed into the function set to be the value of its
`name` property when it is invoked. The returned object has a function,
`greet`, which takes an argument `timeOfDay`. Within the function body
of `greet`, a local variable `msg` is initialized and set to an empty string.
Then, using `switch` and `case`, depending on the value of the `timeOfDay`
argument that was passed into the function, the value of `msg` is changed.
However, in all cases, evaluating the value of the string being added to the
`msg` string throws a reference error because the variables `morning`,
`afternoon`, and `evening` do not exist in this code. Instead, if we wanted
to log the values of the properties `morning`, `afternoon`, and `evening`, in
the returned object, we would need to use the `this` keyword. Lines 12,
15, and 18, should be `msg += `${this.morning} ${name}`;` respectively.
*/