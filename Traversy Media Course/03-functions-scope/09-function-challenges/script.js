//  CHALLENGE 1
const getCelcius = f => (f - 32) * 5 / 9

console.log(`The temperature is ${getCelcius(32)} \xB0C`);

//  CHALLENGE 2
/* function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        min,
        max,
    };
};

console.log(minMax([23, 4, 789, 45, 35, 77])); */


//Arrow Notation
const minMax = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {//Rememberr that if your object key and value have the same name/words you dont need to do something like min:min again. So just do min
        min, //min:min
        max, //max:max
    };
}

console.log(minMax([23, 4, 789, 45, 35, 77]));


//  CHALLENGE 3
(function area(length, width) {
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${length * width}`)
})(10, 5);

//  Arrow Notation
/* const area =  */((length, width) => console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${length * width}`))(5 , 5)


