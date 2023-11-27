const form = document.getElementById('item-form');

function onSubmit(event) {
    event.preventDefault();
    // console.log('Submited');
    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input');

    // Form Validation
    if (item === '' || priority === '0') {
        alert('Please fill in all fields');
        return;
    };

    console.log(item, priority.value, typeof (priority.value));

};

function onSubmit2(event) {
    event.preventDefault();

    const formData = new FormData(form);

    // const item = formData.get('item');
    // const priority = formData.get('priority');

    // console.log(item, priority);

    const entries = formData.entries();
    // console.log(entries);

    for (let entry of entries) {
        console.log(entry);
        console.log(entry[1]);
    }
}


form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);