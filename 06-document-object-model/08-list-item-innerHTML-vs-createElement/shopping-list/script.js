// My method
const li = document.createElement('li');
const button = document.createElement('button');
const i = document.createElement('i');

button.className = 'remove-item btn-link text-red';
i.setAttribute('class', 'fa-solid fa-xmark')

li.append('Pineapples');
button.appendChild(i);
li.appendChild(button)

document.querySelector('.items').appendChild(li)

// His Method
const createListItem = item => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));


    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);
    li.appendChild(button);

    document.querySelector('.items').appendChild(li);
}

createListItem('Eggs');
createListItem('pizza');