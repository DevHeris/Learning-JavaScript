let output;

//  Get child elements fom the parent

const parent = document.querySelector('.parent');

output = parent.children;

output = parent.children[2].innerText;// Child 3
output = parent.children[2].nodeName;// Div
output = parent.children[2].className;// Child

parent.children[1].innerText = 'Child Two';
parent.children[1].style.border = '2px solid #333';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Get parent from a child
const child = document.querySelector('.child');//first child

output = child.parentElement;
child.parentElement.style.border = '2px solid red';
child.parentElement.style.padding = '2em';


// Getting Sibling elements

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;
output = secondItem.nextElementSibling;
secondItem.nextElementSibling.style.backgroundColor = 'green';
secondItem.previousElementSibling.style.backgroundColor = 'blue';

console.log(output);