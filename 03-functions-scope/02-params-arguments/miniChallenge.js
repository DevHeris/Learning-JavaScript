//Create a function that returns a random element from a specific array you pass in

function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);// This gives a random index

    const item = arr[randomIndex];

    console.log(item);

}

getRandom([12, 43, 56, 78]);
