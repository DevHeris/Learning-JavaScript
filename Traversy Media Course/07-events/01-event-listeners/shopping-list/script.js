const clearBtn = document.querySelector('#clear');

// JavaScript Event Listener

/* clearBtn.onclick = function () {
    alert('Clear Items');
}; */

// addEventListener() //RECOMMENDED
/* clearBtn.addEventListener('click', () =>
    alert('Clear Items?')
);
//You can have more than one eventListener on the same event
clearBtn.addEventListener('click', () =>
    alert('Are you sure?')
); */

// You can also used a named function
// function onClear() {
//     alert('Yokata')
// };

// clearBtn.addEventListener('click', onClear);

// Removing event listener

/*
setTimeout(() => {
    clearBtn.removeEventListener('click', onClear)
}, 5000);//5000milliseconds i.e after 5seconds
*/


// But what if you want your script to add or remove an event automatically without you having to click something on the page

/* clearBtn.addEventListener('click', onClear);
setTimeout(() => clearBtn.click(), 5000); //I don't really understand this yet
 */

// So now try to clear all the list items once you click the clear all button in the browser
const itemList = document.querySelector('ul');

function removeItems() {
    itemList.remove();
}
clearBtn.addEventListener('click', removeItems);

//  There are other methods to accomplish this same thing so watch lesson 84 for these other methods.
