let studentList1 = `Students1:
 * bismah1
 * samreen2
 * maida3
`;

alert( `The backslash: \\` ); // The backslash: \ needed 2 cuz 1 is used in tags

alert( 'I\'m the Walrus!' ); //\' used to avoid string end or use " " on the sides instead

alert( `cat\n`.length ); // 4 as \n is a single special character....length is just a property here

let str1 = `Hat`;

// the first character
alert( str1[0] ); // H
alert( str1.at(0) ); // H

// the last character
alert( str1[str1.length - 1] ); // t
alert( str1.at(-1) );

for (let char of "Har") {
  alert(char); // H,a,t (char becomes "H", then "a", then "t" etc)
}

alert( 'Interface'[3].toUpperCase() ); // 'E'    

let str2 = 'Widget with id';

alert( str2.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str2.indexOf('widget') ); // -1, not found, the search is case-sensitive

alert( str2.indexOf("with") ); // 7, "with" is found at the position 7 
//looping str.indexof 

alert( "Hello".includes("Bye") ); // false    ...easy method if we don't need to find position
//str.endsWith and str.startsWith

let str = "helped";
alert( str.slice(0, 4) ); //help as 4th won't be included
alert(str.slice(4)); //ed as its from 4th to the end
alert(str.slice (-4,-1));   //lpe   as -1 position won't be counted in
alert( str.slice(4, 0) ); //"" empty as it can't be like this

alert(str.substring(4,2)); //lp
alert(str.substring(2,4)); //lp   negative arguments are not supported here

//for str.substr it has (start, length) in it but isn't suppored here
//str.codePointAt(pos) Returns a decimal number representing the code for the character at position 
//String.fromCodePoint(code) Creates a character by its numeric code
//str.trim() – removes (“trims”) spaces from the beginning and end of the string.
//str.repeat(n) – repeats the string n times.

//SANDBOX TASK:
function extractCurrencyValue(str) {
  return +str.slice(1); // Removes the first character (the dollar sign) and converts to number and use 1 and + cuz $ isn't number
}
