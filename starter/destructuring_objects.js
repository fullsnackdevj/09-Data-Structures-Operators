// 'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// destructuring Objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// what if variables are not the same with the property names?

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// dealing with 3rd party data, ie: api call.

console.log(restaurant.menu); // undefined

//default values
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

// mutating variables while destructuring

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// {a, b} = obj; // Uncaught SyntaxError: Unexpected token '='

({ a, b } = obj);

console.log(a, b);
