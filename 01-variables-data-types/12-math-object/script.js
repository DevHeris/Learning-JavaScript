console.log(Math); //This shows all the posssible methods the math object can take
let x;
// squareroot
x = Math.sqrt(4); //2

//Absolute which gives the absolute value of a number
x = Math.abs(-67); //67

//Round
x = Math.round(4.6); //5
x = Math.round(4.3); //4

//Round Up with ceil method which returns the smallest integer greater than or equal to its numeric argument.
x = Math.ceil(5.3); //6
x = Math.ceil(5.9); //6

//Round Down with floor method which returns the smallest integer lesser than or equal
x = Math.floor(5.9); //5
x = Math.floor(5.1); //5

//Pow returns the value of a base expression taken to a specified power.
x = Math.pow(2, 3); //8 i.e 2 raised to the power of 3

//Min and Max which returns the and max value respectively of a group of numbers
x = Math.min(2, 3, 4, 6); //2
x = Math.max(2, 4, 6, 7, 89); //89

//Random method returns a pseudorandom number between 0 and 1.
x = Math.random(); //This just gives a random number each time the page is loaded


//But what if you dont want to work with values between 0 and 9.How do you go about that?
x = Math.random() * 10; //Random numbers within 0 and 9
x = Math.random() * 10 + 1; //between 1 to 10
x = Math.random() * 100; //Random numbers within 0 and 99

// But the three above are in decimals.What if I need the numbers in whole numbers?
x = Math.floor(Math.random() * 10 + 1); //Random Whole numbers from 1 to 10
x = Math.floor(Math.random() * 100 + 1); //Random Whole numbers from 1 to 100

console.log(x);