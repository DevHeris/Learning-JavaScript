//  remove()
function removeClearBtn() {
    document.querySelector('#clear').remove()
};

// removeChild()
function removeFirstItem() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
};
// to remove a specific item/list
function removeItem(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    ul.removeChild(li);
};
// another way
function removeItem2(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemNumber - 1]; //Because its zero based (as per a NODE list)

    ul.removeChild(li);
};

// Another example
function removeItem3(itemNumber) {
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove()
}

// still Another
const removeItem4 = itemNumber => document.querySelectorAll('li')[itemNumber - 1].remove()
removeClearBtn();
// removeItem(1);
// removeItem2(3);
// removeItem3(2);
removeItem4(1);



// removeFirstItem();