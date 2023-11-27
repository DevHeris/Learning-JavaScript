// Step 1

const library = [
    {
        title: 'Learning JavaScript',
        author: 'Ethan Brown',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Quiet',
        author: 'Susan Cain',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'HOw to win friends and influence people',
        author: 'Dale Carnegie',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
];

// Step 2

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3

const { title: firstBook } = library[0];
console.log(firstBook);//Learning JavaScript

// Step 4

const jsonStr = JSON.stringify(library);
console.log(jsonStr);