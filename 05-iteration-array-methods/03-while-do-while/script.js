let i = 0;

while (i <= 20) {
    console.log('Number ' + i);
    i++;
};

//Use a for loop when you know th enumber of time you want the loop to run and while loop when the number of times we want the loop to run is unknown

// While loop to loop over arrays

const arr = ['Shana', 'Idan', 'Iwe', 'Scholar'];
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
};


// Nesting While loops
let k = 1;
while (k <= 5) {
    console.log('Number ' + k);

    let l = 1;
    while (l <= 5) {
        console.log(`${k} * ${l} = ${k * l}`);
        l++
    }
    k++
};


// Do while loops
let t = 122;
do {
    console.log('Number ' + t);
    t++
} while (t <= 4);

// If the condition is false like in this case where 122 is not less than 4, the loop will still run once i.e it will still print Number 122