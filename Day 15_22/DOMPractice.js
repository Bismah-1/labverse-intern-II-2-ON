/*<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM LEARNING</title>
  <style>
    .bg-black{
        background-color: #212121;
        color:#fff;
    }
  </style>
</head>
<body class="bg-black">
    <div>
        <h1 id="title" class="heading">DOM Learning for<span style="display: none;"> test text</span> Labverse</h1>
        <p>I am practicing Labverse tasks.</p>
        <p>I am practicing all my tasks.</p>
        </h1> 
            <input type="password" name="" id=""> <ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>

               </div>
 
</body>
</html>



title.textContent
'DOM Learning for test text Labverse'
title.innerHTML
'DOM Learning for<span style="display: none;"> test text</span> Labverse'
title.innerText
'DOM Learning for Labverse'


document.getElementsByClassName('main heading')
HTMLCollection []length: 0[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Object

document.querySelector('p')
<p>​I am practicing Labverse tasks.​</p>​   //gives 1st <p> as in JS it starts from 0

document.querySelector('#heading')
null
document.querySelector('#title')


document.querySelector('input[type="password"]')
<input type=​"password" name id>​
document.querySelector('p:first-child')       //null


document.querySelector('ul')
const list=document.querySelector('ul')
undefined
list
list.querySelector('li')
const green=list.querySelector('li')
undefined
green.style.backgroundColor='golden'
'golden'
green.style.backgroundColor='gold'
'gold'
green.style.borderRadius='20px'
'20px'

now a const for a querySelectorAll is not an array ,it has nodelist that only acts like an array and therefore has less properties than an actual array.Also it can't change properties of all elements in a time 
but only changes 1 that yu mention....0, 1, 2 .....etc
the nodelist is not an array 
so to make all of them change something write forEach(function(your choice to name it){
choicename .style.color='red'
})

you also have ways to convert nodelist into an array to get map and other properties...without array , use forEach to access all items.


document.getElementsByClassName('list-item')
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: HTMLCollection
const templist= document.getElementsByClassName('list-item')
undefined
templist
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

templist.forEach(function(a) {
    console.log(li)
}
VM435:3 Uncaught SyntaxError: missing ) after argument listUnderstand this error
Array.from('templist')

//this wil give you all the methods and properties of an array for this html collection

const convertedArray = Array.from(templist);
undefined

convertedArray.forEach(function(b) {
  b.style.color = 'gold';
});
undefined
*/

