//----------using simple function inside an object--------------
const user={
    name: "hira",
    age:20,

    message: function(){
        console.log(`Hello ${this.name}, welcome here!`) //sing this keyword to access current context of this object's properties
    }
}
user.message();   //hello hira, welcome here!
//this inside is used to give the result as per current object context so now if i change the name
//the context currently will be changed 
user.name = "khan";
user.message();   //hello khan, welcome here!
//but now if i add this alone to be printed inside the function it will give bth contexts

const user1={
    name: "hira",
    age:20,

    message: function(){
        console.log(`Hello ${this.name}, welcome here!`) //sing this keyword to access current context of this object's properties
          console.log(this); //this will give the whole object context
                             //  Hello hira, welcome here!
                             //{name: 'hira', age: 20, message: ƒ}
                             // Hello khan, welcome here!
                             // {name: 'khan', age: 20, message: ƒ}
}
}
//user1.message(); 
//user1.name = "khan";
//user1.message(); 
console.log(this); //{}  here but this will give the global context of the 'window' object in browser

//--------------------------This in a stand alone function--------------------------
function hi(){
    console.log(this); 
}
hi(); //gives windows object on browser but on node js has a very complex output

function hello(){
    user:'bismah',
    console.log(this); 
}
hello(); //still gives windows object on browser but on node js has a very complex output
//it means this can't be used in a stand alone function
//-------------------arrow functions-------------------
//()=>{} basic arow function syntax 
//can be held in a variable
const addnum= (num1,num2) => {
    return num1 + num2;
}
addnum(5, 10); // Output: 15
//here return is used explicitly but we can also use it implicitly
//const subtract=(num1,num2)=> num1 - num2; //no need to use return keyword
const subtract=(num1,num2)=> (num1 - num2);
console.log(subtract(10, 5)); // Output: 5


//--------------------------return an  object-----------------------------
const retobj=(hello)=>({user:'bismah'})                     //use of parenthesis is very important here
console.log(retobj()); // Output: {user: 'bismah'}


//this in arrow functions
const helper=()=>{
    console.log(this); //gives windows object on browser but on node js has a very complex output
}
helper(); //still gives windows object on browser but on node js has a very complex output

//this can't be used in arrow functions fully but in simple ffunctions it can be used in objects

//for arrays
const numbers = [1, 2, 3, 4, 5];
numbers.forEach ((num) => {        //or .forEach()=>()
    console.log(num); // Output: 1 2 3 4 5
})

