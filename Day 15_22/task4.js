//Q1:

const shoppingList = ["Milk", "Eggs", "Fruits", "Vegetables", "Flour"];

const ulElement = document.getElementById("Shopping_List");

shoppingList.forEach(function(item) {
    const li = document.createElement("li");
    li.textContent = item;
    ulElement.appendChild(li);
});


//Q2:

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = numberArray.filter(num => num % 2 == 0);

console.log(evens);

//Q3:

const products = [
    { name: "Laptop", price: 1200, inStock: true },
    { name: "Mouse", price: 25, inStock: true },
    { name: "Keyboard", price: 75, inStock: false }
];

const htmlContainer = document.getElementById("containerhere");

const cards = products.map(function(product) {
    return `
        <div class="product-card">
            <h4>${product.name}</h4>
            <h4>Price: $${product.price}</h4>
            <h4>Status: ${product.inStock ? "Yes" : "No"}</h4>
        </div>
    `;
});

htmlContainer.innerHTML = cards.join('');


//Q4:

const person = {
    firstName: "Hira",
    lastName: "Khan",
    age: 20
};


console.log( person.firstName + " " + person.lastName);     // Dot notation
console.log( person.age);

console.log( person["firstName"] + " " + person["lastName"]);    // Bracket notation
console.log( person["age"]);

person.city = "Gujrat";                 // Adding new property
console.log( person);
 
//Q5:

const books = [
    { title: "Zavia", author: "Ashfaq Ahmed" },
    { title: "Great Air Battle of Pakistan Air Force",author: "Tufail" },
    { title: "In The Ring and On Its Feet ", author: "Tufail" }
];

function findBookByTitle(bookArr, titled) {
    const book = bookArr.find(function(book) {
        return book.title.toLowerCase() === titled.toLowerCase();
    });
    return book || null;
}
console.log(findBookByTitle(books, "Zavia"));  
console.log(findBookByTitle(books, "Peer e kamil"));    // null
