let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let movies = function(number) {
      return this.name + ' ' + number;
    };

    movies = movies.bind(this);

    return [1, 2, 3].map(movies);
  },
};

console.log(franchise.allMovies());
/**
The method will not returned the desired object because the execution of the
callback function passed into the `map` method is not the object referenced
by `franchise`. Instead, it is the global object. Functions that are nested
within another function lead to context loss unless we take preventative
measures.

We can fix this problem using lexical scoping rules by creating a variable that
has the value of `this` in the outer function, and use that variable from
within the inner function.
 */