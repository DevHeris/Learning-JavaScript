const text = document.querySelector('p');
const itemList = document.querySelector('.item-list ');
const items = itemList.querySelectorAll('li');

function run() {
    // className
    // console.log(itemList.className);
    // text.className = 'card dark';

    // classList
    console.log(itemList.classList);//an arr

    itemList.classList.forEach(elementClass => console.log(elementClass));

    // text.classList.add('dark'); //With this add method i dont need to also add the 'card' class before i can keep the style for the card class in the css. this add() guy just automatically joins it to the class , not replacing the existing class) like the className method earlier

    // text.classList.remove('card'); //removes the padding and the border and stuff once you click thre run button because yoou already removed the card class and so the css style is also gone along with it

    // text.classList.toggle('dark');
    // text.classList.toggle('hidden'); //Pretty cool

    text.classList.replace('card', 'dark');

    // Change Style directly
    // itemList.style.lineHeight = '3';

    items.forEach((item, index) => {
        item.style.backgroundColor = 'papayawhip';
        item.style.textAlign = 'center';

        if (index === 2) {
            item.style.color = 'red'
        }
    })

}

document.querySelector('button').onclick = run; 