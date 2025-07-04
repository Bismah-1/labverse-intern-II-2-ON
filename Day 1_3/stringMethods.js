let arr1 = ["I", "go", "home"];       //DELETE KEY IS WRONG FOR ARRAY

delete arr1[1]; // remove "go"

alert( arr1[1] ); // undefined

// now arr1 = ["I",  , "home"];
alert( arr1.length ); // 3       //DELETE IS USED FOR DELETING OBJ.KEY SO HERE CAN'T WORK CUZ ARRAYS NEED OTHER ELEMENTS TO SHIFT AS WELL


let arr5 = ["HI", "CODE", "JS", "WELL", "COME"];

// remove 2 first elements and replace them with another
arr5.splice(0, 2, "HELLO!");

alert( arr5 ) // now ["HELLO!", "JS", "WELL", "COME"]
//ARR.CONCAT
let arr6 = [1, 2];
alert( arr6.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6   ADDS ARRAYS AND ARGUMENTS AT THE END OF PREVIOUS ARRAY

//TASK1:

function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
 
//TASK2:
function filterRange(arr, a, b) {
  // added brackets around the expression for better readability
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

//TASK 3:

function filterRangeInPlace(arr1, a, b) {

  for (let i = 0; i < arr1.length; i++) {
    let val = arr1[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr1.splice(i, 1);
      i--;
    }
  }

}

let arr3 = [5, 3, 8, 1];

filterRangeInPlace(arr3, 1, 4); // removed the numbers except from 1 to 4

alert( arr3 ); // [3, 1]
