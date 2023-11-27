// 2....document.getElementById()

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));

// To set attribute and not just get them
document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'title');

// Putting the selector into a variable if you know you will be using it more than once
const title = document.getElementById('app-title');

// Get/change content
console.log(title.textContent);
title.textContent = 'Welcome';
title.innerText = 'Welcome...Again';
title.innerHTML = '<strong>Shopping List</strong>';

// Change style i.e edditing your css
title.style.color = 'green';
title.style.backgroundColor = 'yellow';
title.style.padding = '10px';
title.style.borderRadius = '10px';
title.style.border = '2px solid green';


// 2....document.querySelector() which also selects only one element
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

// Changing Content
const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple juice';
secondItem.style.color = 'red';

// Using these methods on other elements other than the document
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');// i.e you used it on list element and not document
firstItem.style.color = 'blue';


// This is just me playing around
document.querySelector('body').style.backgroundColor = 'papayawhip'