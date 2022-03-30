let series = function(number) {
  return this.name + ' ' + number;
};

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    series.bind(this);
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }.bind(this));
  },
};

console.log(franchise.allMovies());