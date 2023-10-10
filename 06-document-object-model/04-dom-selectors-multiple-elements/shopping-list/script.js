// querySelectorAll()

const listItems = document.querySelectorAll('.item');
console.log(listItems[1].innerText);

// listItems.style.color = 'red'; Wont work

// listItems.forEach((item, index) => {
//     item.style.color = 'red';

//     if (index === 2) {
//         item.style.backgroundColor = 'blue';
//     }

//     if (index === 0) {
//         item.innerHTML = `Watermelon
//         <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//         </button>`;
//     }
// });

// Other Methods that are no longer used that much anymore

// 1...getElementByClassName()
const listItem2 = document.getElementsByClassName('item');

console.log(listItem2[2].innerText);

Array.from(listItem2).forEach((item) => {
    item.style.color = 'red';
});

// getElementByTagName()

const listItem3 = document.getElementsByTagName('li');
console.log(listItem3[0].innerText);