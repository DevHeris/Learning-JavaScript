const div = document.createElement('div');

div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'element-title');

// div.innerText = 'Hello World'; //This isnt really the best way of inserting text for a newly created element though

const text = document.createTextNode('Hello World');

div.appendChild(text);

// document.body.appendChild(div);// puts it at the bottom of the document body

document.querySelector('ul').appendChild(div);