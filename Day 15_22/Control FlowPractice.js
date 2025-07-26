"use strict";

//const balance=1000;
//if (balance > 500) console.log("test");   //here test part is set as implicit scope yani maan lia k ye scope  without brackets but only can be in one line.

/*const balance=1000;
if (balance > 500){
 console.log("test");
}else {
    console.log(not right);
    
}
*/
/*
if(){            

}else if(){

}else if(){

}else {

}*/

//+++++++++++++++++++++Switch Statements+++++++++++++++
/*const month=3;
//when youhave to find from multiple things and have to use alot of if else statements instead use switch
switch (month){      //month is the key here
case 1:
    console.log("January");
    break;
case 2:
    console.log("February");
    break;
case 3: 
    console.log("March");
    break;                     
case 4:
    console.log("April");
    break;
    default:
        console.log("nothing matched");
        
        break;
    
}*/
/*const month="March";

switch (month){      //month is the key here
case "january":
    console.log("January");
    break;
case "February":
    console.log("February");
    break;
case "March": 
    console.log("March");
    break;                     
case "April":
    console.log("April");
    break;
    default:
        console.log("nothing matched");
        
        break;
}*/

/* falsy values
false, 0, -0, Bigint 0n, "",null,undefined, NaN

truthy values
"0",'false', " ", [],{},function(){}
 
for array[] to check if its either empty

if (userEmail.length=== 0) {
console.log("Array is empty");
}
 
for empty object{} to check if its either empty
const emtObj= {}
if (Object.keys(emtObj).length === 0){   // (Object.keys(emtObj)) gives us the array
console.log("Object is Empty");          
}

?? this operater is only made for null and undefined like if you have
to choose for a value between null or something 1st value is choosen
e.g.
let val;
val= 4 ?? 10 ?? 5    //4
val= null ?? 4       //4
val= undefined ?? 8  //8
console.log(val);

//Terniary operator
infront of condition directly write the true and false statements
condition ? true : false
*/
