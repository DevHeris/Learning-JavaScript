const post = {
    id: 1,
    title: 'Post one',
    body: 'This is the body',
};
console.log(post);

//Convert to JSON string
const str = JSON.stringify(post)

console.log(str);// JSON string


//Parse JSON i.e to convert the JSON back to the object literal
const obj = JSON.parse(str);
console.log(obj);//Normal object literal



// JSON also works on an array of objects
/* const post = [
    {
        id: 1,
        title: 'Post one',
        body: 'This is the body',
    };
{
    id: 1,
        title: 'Post one',
            body: 'This is the body',
    };
{
    id: 1,
        title: 'Post one',
            body: 'This is the body',
    };
];

const str2 = JSON.stringify(posts);
console.log(str2); */

//Note you cant access a property of a stringified JSON object but you can after you use parse()