// insertAdjacentElement method Example
function insertElement() {
    const filter = document.querySelector('.filter');

    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';
    filter.insertAdjacentElement("afterend", h1)
}

// insertAdjacentText Example
function insertText() {
    const item = document.querySelector('li');

    item.insertAdjacentText('afterbegin', 'insertAdjacentText');
}

// insertAdjacentHTML Example
function insertAdjacentHTML() {
    const clearBtn = document.querySelector('#clear');

    clearBtn.insertAdjacentHTML('beforeend', '<h2>insertAdjacentHTML</h2>')
}

// insertBefore Example
function insertBefore() {
    const ul = document.querySelector('ul');

    const li = document.createElement('li');
    li.textContent = 'insertBefore';

    const thirdItem = document.querySelector('li:nth-child(3)');

    ul.insertBefore(li, thirdItem);
}

insertElement();
insertText();
insertAdjacentHTML();
insertBefore(); // Similar to appendChild in how it works but a little more complicated

/* 
<!-- beforebegin --> 
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
  */