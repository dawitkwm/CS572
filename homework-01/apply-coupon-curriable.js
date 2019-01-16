
/**
 * A curriable function that applies a discount coupon to the price of an item.
 */

//using arrow functions
const applyCoupon = (item) => (discount) => ({
    name: item.name, 
    type: item.type,
    category: item.category, 
    price: item.price  - (item.price * (discount / 100))
})

// //using regular functions
// let applyCoupon = function(item) {
//     return function(discount) {
//         item.price = item.price  - (item.price * (discount / 100));
//         // console.log(item.price);
//         return item;
//     };
// };

const item = {
    "name": "Biscuits",
    "type": "regular",
    "category": "food",
    "price": 200
};

console.log(
    applyCoupon(item)(10).price === 180
);