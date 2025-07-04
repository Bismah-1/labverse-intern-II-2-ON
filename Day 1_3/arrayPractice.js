//Array is an object 

let arr = new Array(2); // will it create an array of [2] cuz it won't take array as a number argument but as length.

alert( arr[0] ); // undefined! no elements 

alert( arr.length ); // length 2   so we usually use []

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[0][1] ); // 2, the second value of the first inner array
//0 is index value and 1 is the inner 1st array index value

alert( [] == [] ); // false
alert( [0] == [0] ); // false
//as they not exactly same by reference so don't use === only use iteration or loop method

//task 1:

let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;

shoppingCart.push("Banana");

alert( fruits.length ); // 4 

//task 2:

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";//style.length-1 =last index and /2 gives middle value then mathfloor ensures its rounded off 
alert( styles.shift() );
styles.unshift("Rap", "Reggae");

//Task : 3
let array = ["a", "b"];

array.push(function() {
  alert( this );
})

array[2](); // a,b,function(){alert(this)}
