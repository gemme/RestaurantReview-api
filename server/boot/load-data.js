'use strict';

module.exports = (app, cb) => {

const {Restaurant} = app.models;
const data = [
    {name: 'React Cafe\'s', address: '123 Anywhere St', rating: 5, image: 'romas.png'},
    {name: 'Fancy Restaurant', address: '799 Main St', rating: 3, image: 'blue-sunset.png'},
    {name: 'Taco Place', address: '550 Maple Rd', rating: 2, image: 'darrell-place.png'},
    {name: "Tony's Diner", address: '4101 College St', rating: 1, image: 'demera.png'},
    {name: 'Pasta Central', address: '706 Harper St', rating: 4, image: 'miel.png'},
    {name: 'Burger Builder', address: '4869 Hamilton Dr', rating: 2, image: 'panda.png'},
    {name: 'Pizza Express', address: '1049 Bird St', rating: 4, image: 'blue-sunset.png'},
    {name: 'Teriyaki To Go', address: '1885 Tea Berry Lane', rating: 3, image: 'darrell-place.png'},
    {name: 'Maroon Deli', address: '1082 Stuart St', rating: 1, image: 'demera.png'},
    {name: 'Prime Bar and Grill', address: '1848 Fairfax Dr', rating: 3, image: 'miel.png'},
    {name: 'Dumpling House', address: '747 Kelly Dr', rating: 1, image: 'panda.png'},
    {name: 'Hot Chicken', address: '1816 Olive St', rating: 5, image: 'blue-sunset.png'},
    {name: "Luna's Tap Room", address: '3256 Spirit Dr', rating: 2, image: 'darrell-place.png'},
    {name: 'Quick Sandwich Shop', address: '2587 Cherry Ridge Dr', rating: 5, image: 'demera.png'},
    {name: "Bobby's Burgers", address: '4152 Berkley St', rating: 5, image: 'miel.png'},
    {name: 'Turnpike Diner', address: '4571 Central Ave', rating: 3, image: 'panda.png'},
    {name: 'Bombay Express', address: '65 Queens Lane', rating: 5, image: 'blue-sunset.png'},
    {name: 'Coffee Central', address: '3228 Oakwood Circle', rating: 4, image: 'darrell-place.png'},
    {name: "King's Garden", address: '2935 Victoria Ct', rating: 5, image: 'demera.png'},
    {name: 'Salads and More', address: '2454 Preston St', rating: 1, image: 'miel.png'},
  ];
  Restaurant.create(data,
    (err, instance, created) => {
        if(err) cb(err);
        cb(null, instance);
  });
}