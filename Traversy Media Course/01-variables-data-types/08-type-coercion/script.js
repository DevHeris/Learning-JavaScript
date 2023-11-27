let a;

a = 5 + '6';

console.log(a, typeof a); //'55'  number coersion into a string

let b;

b = 5 + Number('6');//Conversion to number first

console.log(b, typeof b); //11


//But what would happen if you were to multiply a number with a string instead, what do you think we will get instead

let c;

c = 5 * '6';
console.log(c, typeof c); //30  string coersion into a number

// Others
d = 5 + null; //number 5. Because null was coerced into the number zero

d = Number(null);//To prove that the number version of null is zero

d = Number(true);//1
d = Number(false);//0

d = 5 + true;//6
d = 5 + false;//5

d = 5 + undefined;//NaN


console.log(d, typeof d);