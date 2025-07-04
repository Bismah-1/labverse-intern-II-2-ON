//Source: javascript.info
'use strict';    //commenting single line and btw use strict gives us acccess to modern ES 5 methods
alert (`Welcome to my website!${1+5}`);   /*commenting multiple
lines and commenting out code....here i've used backticks to hold string with an expression in ${}.
can also be used to hold a variable but without "" */
(function(){
'use strict';
alert ("hi"); //can use both single or double quotation marks
})()     //if normal use strict doesn't work use this!

//VARIABLE
let peregrineHere;  //declares or let Peregrine = 'Bismah'
peregrineHere = 'Bismah';   //assigns
alert (peregrineHere);    //shows

//multiple variables declaration
let hide='seek';/*or let hide='seek', code='JS'; OR let hide='seek' OR let hide='seek',
                                                     ,code=1;           code=1;*/
let code= 1 ; //can also use 'var' instead of let
//don't use let twice for same variable or it gives error so do this instead

let $ = 6;
    $ = 4;     //this puts 6 into bin and gives $ a new value
// 1 varible cannot hold 2 values but 2 variables can hold the same value
let _ = $  //_ also stores value as 4
let C1 = 6;
alert ($ + C1);  // 10
/*can only use $ and _ as symbols, no digit in start of variable name and in camel case
 e.g. camelCase .Also, it is Case sensitive with names but can write in any language and
  can't name let, return, function and class*/

  //CONSTANTS
  //when you don't want to change its value anywhere 
  const SOURCE_CODE = '20.01.9907';   //const instead of let and uppercase name for hard value before execution not for run-time const
//DATATYPES
  //number
  /*holds numbers, float, infinity,n-infinity and NAN(not a number)*/
//bigint
const bigint = 12313123456456456768799n; //numb greater than +-(2^53-1) is bigint represented by 'n' in the end
//string( holds letter, single, many or no words )
//Boolean(logical)
let objectNamesAdded = true;
let objectNamesDiscusses = false;  //shows result
let isGreater = 6<1;  //to show comparison
alert( isGreater) //false
//null
let address= null;  //unknown, empty or nothing
//undefined
let aged; 
alert(aged);//gives undefined as age not assigned value
//objects and symbols are a lill more high level than others
//typeof (operator)
alert(typeof 7.1);    //number
alert(typeof undefined);  //undefined
alert(typeof 234n);   //bigint
alert(typeof false);  //boolean
alert(typeof 'hi');  //string
alert(typeof Symbol("id"));  //symbol
alert(typeof alert);  //function
alert(typeof Math);  //object
//an exception
alert(typeof null); //gives object

//PROMPT                                    //gives modal window like alert and confirm
let age = prompt('How old are you?', 100);               //prompt(title,[default])

alert(`You are ${age} years old!`); // ON OK: You are 100 years old!, ON CANCEL: You are null yers old!
//CONFIRM
let named = confirm("are you Bismah?")

alert(named);   //true :ok pressed, false :cancel pressed