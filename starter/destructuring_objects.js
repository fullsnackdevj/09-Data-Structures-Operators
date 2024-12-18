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

  // passing objects as one argument to a function start

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },
}; // result: Order Received! Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 22:30

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// setting up default values

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
}); // result: Order Received! Bruschetta and Pizza will be delivered to Via del Sole, 21 at 20:00

//

// passing objects as one argument to a function ends

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

// nested objects

const {
  fri: { open: openH, close: closeH }, // variable 'open' & 'close' can be anything
} = openingHours;
console.log(openH, closeH); // result: 11 23

// the spread operator

const arr = [7, 8, 9];

//manual adding elements:
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
//result: [1, 2, 7, 8, 9]

// using spread operator
// '...' spreading array to its individual elements
const newArr1 = [1, 2, arr]; // [1, 2, Array(3)] 'were including the entire 'arr' array here..
const newArr2 = [1, 2, ...arr]; //[1, 2, 7, 8, 9] ' using spread operator ... were taking all out all the elements on the 'arr' array
console.log(newArr1, newArr2);

console.log(...newArr2); // unpacking elements inside the 'newArr2' array : 1 2 7 8 9

// spread operator does is basically take all the values out of this 'arr' array and then write them individually as if we wrote seven, eight nine here manually.

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // result:  ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// Important use cases of using spread operator
/* 
#1 Creating shallow copies of arrays
#2 Merge two arrays together */

// Creating Shallow Copy Array:
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Joining to arrays

const newMenu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(newMenu1);

//result: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

// Iterables: arrays, strings, maps, sets. NOT OBJECTS

// USE IN STRINGS
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

// this will not work :
// console.log(`${...str} Schmedtmann`); // Uncaught SyntaxError: Unexpected token '...'

// Notes: multiple values separated by a comma are usually only expected when we pass arguments into a function, or when we build a new array.

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// working spread operator with objects tho 'objects' is not iterables

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' }; // basically copying all the properties of the 'restaurant' into this new object.

console.log(newRestaurant);

// creating shallow copy in object

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // Ristorante Roma
console.log(restaurant.name); // Classico Italiano
