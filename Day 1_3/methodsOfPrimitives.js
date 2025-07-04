//OBJECTS
let Person= {                          //made an object with function inside
    name: "Hira",                       //stores many properties
    sayHello: function() {
        alert("helloHira!");
    }
};
Person.sayHello();                    //objects are heavier than primitives

//Object Wrapper(can make premitives: objects in numbers, string and boolean etc that destroy later at calling property or method by obj.)
//they are not really objects but behave as such for a time
let str='HI';
alert(str.toLowerCase());   // here method is used and gives hi but the object is made so destroyed after result
//only previous str remains if we use alert again
//2nd method(not common)
//making wrapper objects using new Number(8), new String("hi"), new Boolean(true) etc

let hey= new Number(5);
if (hey){                                 //true: now it is an object here
    alert("its an object wrapper");
}
//if you want to convert a string to number or any other premitive only write number
let code= String(8);     //use capital S here for string and look we don't write "8" or a word but still get a string
alert (code);

//no method applies on null and undefined
/*TASK
let str = "Hello";

str.test = 5;         //OBJECT WRAPPER IS ALREADY DESTROYED HERE After method called....   only str remains

alert(str.test);       //Result : ERROR  */