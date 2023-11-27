const itemInput = document.querySelector('.form-input');

const onKeyPress = (event) => console.log('key press event');
const onKeyUp = (event) => console.log('key up event');
const onKeyDown = (event) => console.log('key down event');


// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
// itemInput.addEventListener('keydown', onKeyDown);

// For the event object property on the key events

const onKeyDown2 = (event) => {
    // Key
    console.log(event.key);
    // document.querySelector('h1').innerText = event.key;
    if (event.key === 'Enter') {
        alert('You pressed enter')
    };

    // keyCode
    // https: //www.toptal.com/developers / keycode / table - of - all - keycodes  (check this link for the various keycodes)

    if (event.keyCode === 13) {
        alert('You pressed enter again')
    };

    console.log(event.keyCode);

    // code
    console.log(event.code);

    if (event.code === 'Digit1') {
        console.log('You Pressed 1');
    }

    if (event.repeat) {// ie if you are holding down a particular key
        console.log('You are holding down ' + event.code);
    }

    console.log('Shift: ' + event.shiftKey);
    console.log('CTRL: ' + event.ctrlKey);
    console.log('ALT: ' + event.altKey);

    // for Combination
    if (event.shiftKey && event.key === 'K') {
        console.log('You hit shift + k');
    }

    // or

    if (event.key == 'k' && event.altKey) {
        console.log('You clicked alt + k');
    }
};

itemInput.addEventListener('keydown', onKeyDown2);
