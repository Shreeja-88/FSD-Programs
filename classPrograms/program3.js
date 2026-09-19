/* Create an inventory management function called filterByMap that acts as a search system for a store catalog. The function takes
three parameters: an array of item objects, a category string to filter by, and a maxPrice number constraint. it must return only
the items that match the exact category and cost less than or equal to the maximum price.*/

function filterByMap(items, category, maxPrice) {
    return items.filter(function(item) {
        return item.category === category && item.cost <= maxPrice;
    });
}
let items = [
    { name: "Laptop", category: "Electronics", cost: 50000 },
    { name: "Mouse", category: "Electronics", cost: 500 },
    { name: "Chair", category: "Furniture", cost: 3000 },
    { name: "Keyboard", category: "Electronics", cost: 1500 }
];

let result = filterByMap(items, "Electronics", 2000);

console.log(result); 
/*output:
[
    { name: "Mouse", category: "Electronics", cost: 500 },
    { name: "Keyboard", category: "Electronics", cost: 1500 }
]
*/ 

/*
write a function called processGrades that accepts an array of student objects. Each object has a name and an array of numeric scores. The function should 
return a new array of objects containing each student's name, their calculated average 
score, and a passed status (true if the average score is 70 or above, false otherwise). Use the map method to create the new array.
*/
function processGrades(students) {
    return students.map(student => {
        let average = (student.scores[0] + student.scores[1] + student.scores[2]) / 3;

        return {
            name: student.name,
            average: average,
            passed: average >= 70
        };
    });
}

let students = [
    { name: "Rahul", scores: [80, 70, 90] },
    { name: "Anu", scores: [60, 65, 70] }
];

console.log(processGrades(students));

/*
output:
[
    { name: "Rahul", average: 80, passed: true },
    { name: "Anu", average: 65, passed: false }
]
*/

/*
Create a function named calculateTotal that takes an array of product object and returns the total cost of all items in the cart. Each product object will look
like this: { name: "Laptop", price:999,  quantity :1}.
*/

function calculateTotal(products) {
    let total = 0;

    for (let product of products) {
        total = total + (product.price * product.quantity);
    }

    return total;
}

let cart = [
    { name: "Laptop", price: 999, quantity: 1 },
    { name: "Mouse", price: 20, quantity: 2 },
    { name: "Keyboard", price: 50, quantity: 1 }
];

console.log(calculateTotal(cart)); //1089
