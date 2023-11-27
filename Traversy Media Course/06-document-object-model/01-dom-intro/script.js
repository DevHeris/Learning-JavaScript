console.log(window);
console.dir(window.document);

console.log(document.body.innerHTML);
console.log(document.body.innerText);

// Getting all the links on a page using the property method
console.log(document.links[0]);

// The document object cis not just to show, it can also change the content of the HTML
// document.body.innerHTML = '<h1>Welcome to the DOM</h1>';

// There are also methods on the document object
// write() method
document.write('Welcome to the DOM');

// Method to select certain elements in the DOM
console.log(document.getElementById('main'));

const main = document.getElementById('main');
main.innerHTML = '<h1>Hello from main</h1>';

// querySelcector()
document.querySelector('#main h1').innerText = 'Hello'