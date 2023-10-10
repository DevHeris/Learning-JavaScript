const d = new Date(2022, 10, 30, 20);//November 30 2022 at whatever hour you put
const hour = d.getHours();

if (hour < 12) {//less than 12pm
    console.log('Good Morning');//Will print only when the hour is less than 12
} else if (hour < 18) {//less than 6pm
    console.log('Good Afternoon');//Will print only when the hour is equal to 12 or less than 18
} else {
    console.log('Good Night');//Will print only when the hour is 18 or more
}

//Nested If
// Illustration 1(same result as the above)
if (hour < 12) {
    console.log('Good Morning');
} else {
    if (hour < 18) {
        console.log('Good Afternoon');
    } else {
        console.log('Good Night');
    }
}

// Illustration 2
if (hour < 12) {//less than 12pm
    console.log('Good Morning');
    if (hour === 6) {
        console.log('Wake Up');
    }
} else if (hour < 18) {//less than 6pm
    console.log('Good Afternoon');
} else {
    console.log('Good Night');
    if (hour >= 20) {
        console.log('You should be in bed');
    }
}

//Multiple conditions in an if statement
if (hour >= 7 && hour < 15) {//i.e between 7am and 3pm(meaning the work day)
    console.log('It is work time!');
}

if (hour === 6 || hour === 20) {
    console.log('Brush your teeth');
}