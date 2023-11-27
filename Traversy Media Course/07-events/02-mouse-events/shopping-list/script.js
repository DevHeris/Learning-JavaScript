const logo = document.querySelector('img');

const onClick = () => console.log('click event');

const onDoubleClick = () => {
    console.log('double click event');
    if (document.body.style.backgroundColor !== 'yellow') { //This is to toggle the colors
        document.body.style.backgroundColor = 'yellow';

    } else {
        document.body.style.backgroundColor = 'white';
    }
};

const onRightClick = () => console.log('right click context event');
const onMouseUp = () => console.log('mouse up event');
const onMouseDown = () => console.log('mouse down event');
const onMouseWheel = () => console.log('mouse wheel event');
const onMouseOver = () => console.log('mouse over event');
const onMouseOut = () => console.log('mouse out event');
const onDragStart = () => console.log('drag start event');
const onDrag = () => console.log('drag event');
const onDragEnd = () => console.log('drag end event');


// Event Listeners 
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
// These upcoming ones have to do with dragging
logo.addEventListener('dragstart', onDragStart)
logo.addEventListener('drag', onDrag)
logo.addEventListener('dragend', onDragEnd)