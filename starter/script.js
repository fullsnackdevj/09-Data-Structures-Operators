'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// array destructuring.. ' unpacking '

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z);

const [first, second] = restaurant.categories; // following the order of the elements in the array.

console.log(first, second); // result: Italian Pizzeria

let [element1, , element2] = restaurant.categories; // getting the 1st and the 3rd elements, simply leaving a hole , , [Italian, Pizzeria, Vegetarian]

console.log(element1, element2); // result: Italian Vegetarian

// switching variables without destructuring

// const temp = element1; // create temporary variable and assign to the element1
// element1 = element2; // assign element1 to element2
// element2 = temp; // assign element2 to temp variable, thats where we temporary stored the value of element1

// console.log(element1, element2); // result: Vegetarian Italian

// switching variables with destructuring

[element1, element2] = [element2, element1]; // creating a new array with 2 variables inverted , simply re-assigning values of 2 variables so no need for the 'Let'

console.log(element1, element2); // result: Vegetarian Italian

//receive 2 return values from a function

console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza
