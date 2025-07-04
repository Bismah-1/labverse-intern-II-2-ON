let num1 = 2_00_00_00_68_978  //Syntactic sugar
let billion = 1e9;  // 1 billion where 1 and 9 zeroes or 1*1000000000

alert( 8.63e8 );  // 8.63 billions (same as 8630000000 or 8_630_000_000)
let num2= 0.00002   //means 2e-5  or 2/100000
6334e-2 === 6334/ 100; // 63.34, decimal point moves 2 times
//Number systems
alert( 0xf6); // 246    0x for hexadecimal , 0b for binary and 0o for octal
//toString(base)method
let num3 = 446;      //can have base from 2-36 (36 used to form urls)
alert(num3.toString(16));//gives 446 in hexadecimal base16
alert(num3.toString(2));// in binary form
alert(67..toString(36)); //when we haven't declared variable use 2 dots to call method as 1 dot is seen as decimal
//round off for 2 or more decimal places
//1. multiply and divide:
let num4 = 3.67985;

alert( Math.round(num4 * 100) / 100 ); // 3.67985 to 367.985 to 368 by rounding off to 3.68
//2. toFixed(n)
let num5 = 6.65;
alert( num5.toFixed(1) ); // 6.7
alert( num5.toFixed(6) ); //6.650000
//IMPRECISE CALCULATIONS
alert( 2e406 ); // Infinity

alert( 0.1 + 0.2 == 0.3 ); // false
alert(0.1 + 0.2);   //0.30000000000000004
//solution
alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3 
// self-increasing number!
alert( 9999999999999999 ); // shows 10000000000000000
//0 and -0 are treated as the same

//isNan and isfinite
alert( isNaN(4)); // 

