const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Inefficient way
/* listItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.target.remove();
    });
}); */

// Efficient way with event delegation
list.addEventListener('click', (event) => {
    if (event.target.tagName = 'Li') {
        event.target.remove();
    };
});

list.addEventListener('mouseover', (event) => {
    if (event.target.tagName = 'Li') {
        event.target.style.color = 'red';
    };
});