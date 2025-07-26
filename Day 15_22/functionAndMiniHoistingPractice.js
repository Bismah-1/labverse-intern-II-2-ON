const add = (num1, num2) => {
    return num1 + num2;
}
let result = add(10, 5);   //important to take it inside a variable or like console.log(add(10, 5));
console.log(result); // Output: 15

function add1(num3,num4) {
    let sum=num3+num4; //so we can also make a variable for it too and then return it 
    return sum;
}
const result1 = add1(20, 30);
console.log(result1); // Output: 50
//now if we add a line after return in a function {}, it won't work because it will not be executed
//e.g. return sum; console.log("Hello"); will not work because the function will stop at return



function login(username){
    if(!username){  //can also be written as if(username === undefined || username === null)
        return "Please enter a username";
    }
    return `Welcome ${username}`;
}
console.log(login()); // Output: Please enter a username
console.log(login("John")); // Output: Welcome John
//we can also have a default value for the parameter
//e.g.
function login1(username = "Guest") {
    return `Welcome ${username}`;
}
console.log(login1()); // Output: Welcome Guest
console.log(login1("Alice")); // Output: Welcome Alice           //here we simply can change the default value

//-------------------------- PART 2---------------------------

function calculatecartprice(num){
    return num;
}
const cartPrice1 = calculatecartprice(100);
console.log(cartPrice1); // Output: 100  but there maybe more than 1 item price but the parameter num will only take 1 value
//so for this reason we use .Rest operator to take multiple values represented by ...parameter
//it packs the bundle of value in it (opposite of spread operator)

function calculatecartprice1(...num){
    return num;
}
const cartPrice = calculatecartprice1(100,200,300);
console.log(cartPrice);//[100, 200, 300] //it will return an array of all the values passed

//we can also use the rest operator in the function to calculate the sum of all the values passed
function calculatecartprice(...num){
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i]; //adding all the values in the array sum=sum + num[i];
    }
    return sum;
}
console.log(calculatecartprice(100, 200, 300)); // Output: 600

//now if we even pass values parameters with ...num...apart from the values arguments, it will get all other arguments
function calculate(val1,val2,...num){
    return [val1,val2,num]; //(3) [10, 20, Array(3)] 
}
console.log(calculate(10, 20, 30, 40, 50)); // Output: (3) [10, 20, Array(3)](val1=10, val2=20 and num=[30, 40, 50])

function calculatecartprice(discount, ...num){
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i];
    }
    return sum - discount; //applying discount on the total price
}
console.log(calculatecartprice(50, 100, 200, 300)); // Output: 550 (600 - 50 discount)calculatecartprice(discount, ...num){
    
//handeling bojects in functions
const object = {
    name: "John",
    age: 30
};
function displayobject(obj){
    return `Name: ${obj.name}, Age: ${obj.age}`;
}
console.log(displayobject(object)); // Output: Name: John, Age: 30
//we can also make a new object to get its value
const object1 = {
    name: "Alice",
    age: 25
};
console.log(displayobject(object1)); // Output: Name: Alice, Age: 25
//or we can directly pass the object like
console.log(displayobject({ name: "Bob", age: 35 })); // Output: Name: Bob, Age: 35

//we can also use arrays inside functions
const array = [1, 2, 3, 4, 5];
function displaysecondval(arr){
    return arr[1];  
}
console.log(displaysecondval(array)); // Output: 2
//or we can directly pass the array like
console.log(displaysecondval([600,500,400,300])); // Output: 500

//--------------------------MINI HOISTING---------------------------
//hoisting is a concept in JavaScript where variables and function declarations are moved to the top
//of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.
//e.g.
console.log(addonenum(7)); 

function addonenum(num){
    return num + 1;
}
// Output: 8
//but now if you make a function using variable it won't work cuz variables are not hoisted
console.log(addtwo(5)); // Output: TypeError: addtwo is not a function
const addtwo= function(num){
    return num + 2;
}
//this is basic concept of mini-Hoisting
