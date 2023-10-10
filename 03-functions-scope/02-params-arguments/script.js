function registerUser1(user) {
    return user + ' is registered';//Concatenation
};

// console.log(user);//User not defined because out here in the global scope it doesnt see the user variable


console.log(registerUser1('John'));// 'John is registered'
console.log(registerUser1());//'Undefined is registered' because the variable user hasn't been given a value here 

// Default Parameters

// So how do you get a default value if a particular variable isnt defined
//1)OLD WAY is to use the if statement
function registerUser2(user) {
    if (!user) {//i.e if the user is not registered
        user = 'Bot'//Bot is the default value if the user variable isnt assigned a value
    }
    return `${user} is registered`; //You can use concatenation or template string 
};
console.log(registerUser2());//Bot is registered

//NEW ES6 way
function registerUser3(user = 'bot') {//i.e you alredy set the default value here incase the argument dont get values
    return `${user} is registered`;
};
console.log(registerUser3());//bot is registered

// Rest Parameters
function sum(...numbers) {
    return numbers;
}

console.log(sum(1, 2, 3));//Array(3) [ 1, 2, 3 ], gives an array with all the arguments passed in as the elements of that array

//For loops which totally okay if you dont understand it now
function sum1(...numbers) {
    let total = 0;//Initialize

    for (const num of numbers) {
        total += num;
    }

    return total;
}
console.log(sum1(1, 2, 3, 4, 5));//15

//Passing in Objects as params
function loginUsers(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}

// Way 1
const user = {
    id: 1,
    name: 'Heris',
};

console.log(loginUsers(user));//The user Heris with the id of 1 is logged in

// Way 2
console.log(
    loginUsers({
        id: 2,
        name: 'Jessica',
    })
);//The user Jessica with the id of 2 is logged in


// Arrays as params
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);// This gives a random index

    const item = arr[randomIndex];

    console.log(item);

}

getRandom([12, 43, 56, 78, 678]);

//Another way of doing the above is by using the rest parameter
function getRandom(...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);// This gives a random index

    const item = arr[randomIndex];

    console.log(item);

}

getRandom(12, 43, 56, 78, 678);//I didnt need to use the bracket symbol since the rest parameter turns the inputed  values into array elements
