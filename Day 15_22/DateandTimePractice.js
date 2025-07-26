/*
it gives us time from 1970


let myDate= new Date();
console.log(myDate);
console.log(myDate.toISOString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);                       //object

let myCreatedDate= new Date(2025,0,19,18,56);
console.log(myCreatedDate.toString());

let mycreatedate= new Date("01-02-2004");    //Indian and Pakitani preferred format
console.log(mycreatedate.toLocaleString());

let fortimefrom1970= Date.now();
console.log(fortimefrom1970);     //time in millisecs
console.log(myCreatedDate.getTime());    //time of myCreatedDate in ms
console.log(Math.round(Date.now()/1000));     //millisec to seconds and also rounded off
console.log(fortimefrom1970); 
*/

let myCreatedDate= new Date();              
console.log(myCreatedDate);                        //for todays date
console.log(myCreatedDate.getMonth());             //6    as it starts from 0
console.log(myCreatedDate.getMonth()+1);           //7 to not confuse the end user
console.log(
 myCreatedDate.toLocaleString('default', {
    year: "numeric",             // get these propertieS by clicking Ctrl+Spacebar
    month: "long",
    day: "numeric",
    hour: 'numeric',
    weekday: "long",
    timeZone: 'Asia/Riyadh'
} )
);
