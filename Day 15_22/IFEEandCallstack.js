//----------------------------IMMEDIATELY INVOKED FUNCTION EXPRESSION----------------------------
//function ko global scope ki values aur extras se bachaney k liey we use ifee
const addnumbers=((num1,num2)=> num1-num2)(4,5)
console.log(addnumbers); // Output: -1

const subtract=(()=> 5-7)()                     //syntax
console.log(subtract); // Output: -2

//() gives you block of code to execute immediately
(function cry(){                                      //NAMED IFEE
console.log('welcome');     //welcome
})();            //this () can also be used for parameters

((name) => {
    console.log(`her name is ${name}`);
})('bismah');                                        //SIMPLE IFEE

const quote=(function cry(){                          //NAMED IFEE
    return "Hello, World!";
})();//have to end them all with ; to end its context
console.log(quote);// Output: "Hello, World!" 
//have to use variable to store the result of the IIFE otherwise won't be executed if we call it in globla scope
      

//----------------------------CALL STACK----------------------------
