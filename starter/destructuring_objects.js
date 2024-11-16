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
