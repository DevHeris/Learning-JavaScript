const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(event) {
    // console.log('Input');
    // console.log(event.target.value);
    heading.textContent = event.target.value;
};

function onChecked(event) {
    // console.log(event.target.checked);
    const isChecked = event.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not Checked';
};

function onFocus(event) {
    console.log('Input is focused');
    itemInput.style.outlineStyle = 'dashed';
    itemInput.style.outlineWidth = '5px';
    itemInput.style.outlineColor = 'darkblue';
};

function onBlur(event) {
    console.log('Input is blurred');
    itemInput.style.outlineStyle = 'none';
};

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);

// Here's just another illustration on the effect of blur and focus events
let help = document.querySelector("#help");
let fields = document.querySelectorAll("input");
for (let field of Array.from(fields)) {
    field.addEventListener("focus", event => {
        let text = event.target.getAttribute("data-help");
        help.textContent = text;
    });
    field.addEventListener("blur", event => {
        help.textContent = "";
    });
}
