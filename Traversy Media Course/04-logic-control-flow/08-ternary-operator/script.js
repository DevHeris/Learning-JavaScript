// illustration 1
let x;
x = undefined ? `Executed because ${x} is a truthy value` : `Executed because ${x} is a falsy value`;

console.log(x);

// illustration 2
const age = 19;
// With an if statement
if (age >= 18) {
    console.log('You are eligible to vote');
} else {
    console.log('Sorry...you are not eligible to vote');
}

// With the ternary operator of conditional operator

age >= 18 ? 'You are eligible to vote' : 'Sorry...you are not eligible to vote';

//Assigning a conditional value to a variable using the ternary operator
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You are eligible to vote' : 'Sorry...you are not eligible to vote';
console.log(canVote);
console.log(canVote2);

// MULTILINE CONDITIONAL STATEMENT

//Long version

const auth = true; //auth to know if we are logged in or not or authenticated
let redirect;

if (auth) {
    alert('Welcome to the dashboard');
    redirect = '/dashboard';
} else {
    alert('Access Denied');
    redirect = '/login';
}
console.log(redirect);


// Using the ternary operator

const redirect2 = auth
    ? (alert('Welcome to the dashboard'), '/dashboard')
    : (alert('Access Denied'), '/login')

console.log(redirect2);

//Shorthand if there's no else statement for ternary operator
// Method 1
auth ? console.log('Welcome to the dasboard') : null;
// Method 2
auth && console.log('To the dashboard');//This comes in alot