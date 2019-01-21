
// You need to write code to represent the process of ordering food at a fast food joint. 
// The object will have two behaviors that you must define.

// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. 
// It should accept one argument named meal. This argument will be an object. 
// Define a function to represent the behavior of getting all orders. 
// It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.
// Invoke the function to return the list of all orders
// Output all orders to the console using console.table()


const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    getAllOrders: function () {
        return this.orders
    }
}

const chickenComboMeal = {
    sandwichType: "chicken sandwich",
    fries: true,
    drinkSize: "S"
}

const burgerComboMeal = {
    sandwichType: "burger",
    fries: true,
    drinkSize: "Large"
}

restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(burgerComboMeal);
const allOrders = restaurant.getAllOrders()
// console.table(allOrders)




// 1. Create a function that logs the result of adding two numbers that were passed in as arguments.
// 2. Create another function that logs the result of subtracting two numbers that were passed in as arguments.
// 3. Invoke each function a couple times with different argument values.
// // 4. Create another function called `calculate` that takes three arguments: two numbers and a function

 const addTwoNumbers = (first, second) => console.log(first + second)
 const subtractTwoNumbers = (first, second) => console.log(first - second)


 const calculate = (first, second, fn) => {
            fn(first, second)
        }

 calculate(434, 3, addTwoNumbers)