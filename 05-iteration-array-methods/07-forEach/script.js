// First High Order Array Method i will be studying
const socials = ['Twitter', 'Facebook', 'LinkedIn', 'Instagram'];

// console.log(socials.__proto__);

/* socials.forEach(element =>
    console.log(element)
);    */

// Other arguments can be passed into the function

socials.forEach((element, index, arr) => console.log(`${index} - ${element}`, arr));

// Passing in a named function

const logSocials = social => console.log(social);
// or function logSocials(social){ console.log(social); }

socials.forEach(logSocials);


// Objects
const socialObjs = [
    { name: 'Twitter', url: 'https://www.twitter.com' },
    { name: 'Facebook', url: 'https://www.facebook.com' },
    { name: 'Linkedin', url: 'https://www.linkedin.com' },
    { name: 'Instagram', url: 'https://www.instagram.com' },
];

socialObjs.forEach(element => console.log(element, element.name, element.url)
)