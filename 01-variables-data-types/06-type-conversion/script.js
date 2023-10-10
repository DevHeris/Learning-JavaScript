// Conversion means 'explicitly' converting your data type

// .............................................string conversion to number
/* Method 1 [ParseInt Method] */
//Example1
let amount = '100';
amount = parseInt(amount);
console.log(amount, typeof amount);

// Example 2
const numString = '22';
const num = parseInt(numString);
console.log(num, typeof num);

/* Method 2 [Using the unary operator] */ //I advice you to use this method since its the newest method
amount = +amount;
console.log(amount, typeof amount);

/* Method 3 [Number object constructor] */
let price = '67';
price = Number(price);
console.log(price, typeof price);


//Try to guess why i had to use another identifier when i used const in the second example. Because you cant just reassign a const value like a let, so thats why i had to use a new identifier num instead of just using numString=parseInt(numString)...For more explanation, if i wanted to use const instead of let for the method three example it would have gone like this;

const priceString = '77';
const priceNum = Number(priceString)
console.log(priceNum, typeof priceNum);

//......................................... Summary (Convert String to Number):

//amount= parseInt(amount);
//amount= +amount;
//amount= Number(amount);


//..........................................Number conversion to string

// Method 1[ toString method]
let number = 45;
number = number.toString();
console.log(number, typeof number);

// If you want to use const instead
const numb = 34;
const string = numb.toString();
console.log(string, typeof string);

// method 2[String constructor]

let amount1 = 787;
amount1 = String(amount1);
console.log(amount1, typeof amount1);

//........................................summary (Convert Number to String):

// amount = amount.toString();
// amount=String(amount);


// .......................................Convert String to Decimal

// You cant use parseInt in this case because as the name implies it works with integers and not decimals. So we use ParseFloat instead\
let amount2 = '49.563';
amount2 = parseFloat(amount2);
console.log(amount2, typeof amount2);

//.......................................convert Number to boolean
let amount3 = 1;
// 0 is the only false value
amount3 = Boolean(amount3);
console.log(amount3, typeof amount3);


// Trying to convert a text string into a Number

let amount4 = 'twenty';
amount4 = + amount4;
console.log(amount4, typeof amount4);

/* The funny thing is it says its not a number(NaN) and says its data type is number. LOL */

// Other ways of getting a NaN are;
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);
