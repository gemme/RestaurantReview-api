'use strict';

module.exports = Restaurant => {

  Restaurant.places = cb => {
    cb(null, restaurants);
  };

  Restaurant.remoteMethod('places', {
    "accepts": [],
    "http": {"verb": "get", "path": "/places"},
    returns: {root: true, type: 'array'}
  });
};


const restaurants = [
    {name: 'React Cafe', address: '123 Anywhere St', rating: 5},
    {name: 'Fancy Restaurant', address: '799 Main St', rating: 3},
    {name: 'Taco Place', address: '550 Maple Rd', rating: 2},
    {name: "Tony's Diner", address: '4101 College St', rating: 1},
    {name: 'Pasta Central', address: '706 Harper St', rating: 4},
    {name: 'Burger Builder', address: '4869 Hamilton Dr', rating: 2},
    {name: 'Pizza Express', address: '1049 Bird St', rating: 4},
    {name: 'Teriyaki To Go', address: '1885 Tea Berry Lane', rating: 3},
    {name: 'Maroon Deli', address: '1082 Stuart St', rating: 1},
    {name: 'Prime Bar and Grill', address: '1848 Fairfax Dr', rating: 3},
    {name: 'Dumpling House', address: '747 Kelly Dr', rating: 1},
    {name: 'Hot Chicken', address: '1816 Olive St', rating: 5},
    {name: "Luna's Tap Room", address: '3256 Spirit Dr', rating: 2},
    {name: 'Quick Sandwich Shop', address: '2587 Cherry Ridge Dr', rating: 5},
    {name: "Bobby's Burgers", address: '4152 Berkley St', rating: 5},
    {name: 'Turnpike Diner', address: '4571 Central Ave', rating: 3},
    {name: 'Bombay Express', address: '65 Queens Lane', rating: 5},
    {name: 'Coffee Central', address: '3228 Oakwood Circle', rating: 4},
    {name: "King's Garden", address: '2935 Victoria Ct', rating: 5},
    {name: 'Salads and More', address: '2454 Preston St', rating: 1},
  ];