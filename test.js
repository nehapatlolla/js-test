// Setup Data

const orders = [
  {
    id: 1,
    dishName: "Burger",
    category: "Fast Food",
    chef: "John Doe",
    ratings: [5, 4, 5],
  },
  {
    id: 2,
    dishName: "Pizza",
    category: "Italian",
    chef: "Jane Smith",
    ratings: [4, 3, 5],
  },
  {
    id: 3,
    dishName: "Sushi",
    category: "Japanese",
    chef: "Tom Brown",
    ratings: [5, 5, 4],
  },
  {
    id: 4,
    dishName: "Salad",
    category: "Healthy",
    chef: "Alice Green",
    ratings: [3, 4, 5],
  },
  {
    id: 5,
    dishName: "Pasta",
    category: "Italian",
    chef: "Gowtam Tinnanuri",
    ratings: [4, 4, 5],
  },
];

const moreOrders = [
  {
    id: 6,
    dishName: "Tacos",
    category: "Mexican",
    chef: "Carlos Ruiz",
    ratings: [4, 5, 4],
  },
  {
    id: 7,
    dishName: "Ramen",
    category: "Japanese",
    chef: "Yuki Tanaka",
    ratings: [5, 4, 5],
  },
];
// Questions
// 🍽️ Filter and Join Dish Names

// Write a function that filters out dishes with ratings below 4, then returns a string of dish names separated by commas.
function getHighRatedDishes() {
  const dishes = orders
    .filter((orders) => orders.ratings.every((n) => n.ratings) < 4)
    .map((dishname) => dishname.dishName);
  return dishes.join(", ");
}

console.log(getHighRatedDishes(orders));
// Should print: "Burger, Sushi, Pasta, Tacos, Ramen"

// 🍔 Slice and Map Dish Names

// Write a function that slices the first N dishes from the orders array, maps their names, and joins them into a single string.
function getFirstNDishNames(n) {
  return orders
    .slice(n)
    .map((m) => m.dishName)
    .join(", ");
}
console.log(getFirstNDishNames(orders, 3));
// Should print: "Burger, Pizza, Sushi"
// 🍲 Merge Orders with Default Values

// Write a function that merges two arrays of food orders
function mergeOrders(arr1, arr2) {
  return [...arr1, arr2];
}
console.log(mergeOrders(orders, moreOrders)); // Should print the merged array of orders
console.log(mergeOrders(orders)); // Should print the original array of orders

// 🥗 Fetch Dish Names by IDs

// Write a function that accepts multiple order IDs, fetches the dish names, and returns a formatted string using the rest operator, nullish coalescing, and template literals.
function getDishNamesByIds(...ids) {
  const orders1 = ids.map((id) => {
    const new2 = orders.find((new1) => new1.id == id);
    return new2?.dishName ?? "unknown Dish ";
  });
  return `Selected Movies: ${orders1.join(", ")}`;
}
console.log(getDishNamesByIds(orders, 1, 3, 5));
// Should print: Selected Dishes: Burger, Pasta, Sushi
console.log(getDishNamesByIds(orders, 1, 6));
// Should print: Selected Dishes: Burger, Unknown Dish
console.log(getDishNamesByIds(orders, 5, 1));
// Should print: Selected Dishes: Sushi, Burger

// 🍜 List Dish Names and Categories

// Write a function that accepts any number of food orders and returns a formatted string listing their dish names and categories using the rest operator, nullish coalescing, and template literals.
function listOrders(...orders) {
  const orderinfo = orders.map((order) => [
    order?.dishName ?? "Unknown Dish",
    order?.category ?? "Unknown Category",
  ]);
  return orderinfo
    .map(([dishname, category]) => `${dishname}(${category})`)
    .join(",");
}
console.log(listOrders(...orders));
// // Should print: Burger (Fast Food), Pizza (Italian), Sushi (Japanese), Salad (Healthy), Pasta (Italian)
console.log(listOrders(orders[0], orders[1], orders[111]));
// Should print: Burger (Fast Food), Pizza (Italian), Unknown Dish (Unknown Category)

// 📊 Calculate Total Ratings for Chefs

// Write a function that calculates the total number of ratings for each chef.
function getTotalRatingsForChefs() {
  return orders.reduce((acc, curr) => {
    acc[curr.chef] = (acc[curr.chef] || 0) + curr.ratings.length;
    return acc;
  }, {});
}
console.log(getTotalRatingsForChefs(orders));
// Should print: { "John Doe": 6, "Jane Smith": 3, "Tom Brown": 3, "Alice Green": 3 }

// 7. Refactoring getOrderDetails
// Improve getOrderDetails through several refactoring steps.

// Original Function
const order1 = {
  dish: {
    name: "Burger",
    category: "Fast Food",
  },
  quantity: 2,
  price: 5.0,
};

function getOrderDetails(o) {
  const dishName = o.dish.name;
  const dishCategory = o.dish.category;
  const orderQuantity = o.quantity;
  const orderPrice = o.price;

  return `${dishName} (${dishCategory}) x${orderQuantity} costs $${orderPrice}`;
}
console.log(getOrderDetails(order1));

//stage1
const order = {
  dish: {
    name: "Burger",
    category: "Fast Food",
  },
  quantity: 2,
  price: 5.0,
};

function getOrderDetails(o) {
  const { dishName, dishCategory, orderQuantity, orderPrice } = o;

  return `${dishName} (${dishCategory}) x${orderQuantity} costs $${orderPrice}`;
}
console.log(getOrderDetails(order));

// 8. Refactoring displayOrderSummary 🚚
// Refactor displayOrderSummary to improve handling of missing data and enhance code clarity.

// Example Data
function displayOrderSummary(orderId) {
  const order = orders.find((o) => o.id === orderId);
  if (
    order &&
    order.dish &&
    order.dish.name &&
    order.dish.category &&
    order.quantity &&
    order.price
  ) {
    console.log(
      `${order.dish.name} (${order.dish.category}) x${order.quantity} costs $${order.price}`
    );
  } else {
    console.log("Some order data is missing.");
  }
}

displayOrderSummary(1);
displayOrderSummary(2);
displayOrderSummary(3);
