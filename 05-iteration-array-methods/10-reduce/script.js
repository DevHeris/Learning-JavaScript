// Note: accummulator is the same as previousValue

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

// Long Version
const sum1 = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0)


console.log(sum, sum1);

// Using a for/of loop which is longggger
const sum2 = () => {
    let accumulator = 0;
    for (const currentValue of numbers) {
        accumulator += currentValue;
    }
    return accumulator;
};
console.log(sum2());


// shopping cart
const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 175 },
];

// Use reduce() to get the total of these prices

const totalPrice = cart.reduce((accumulator, currentPrice) => accumulator + currentPrice.price, 0);
console.log(totalPrice);// 455