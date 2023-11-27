// Me trying it first with my method
/* const onKeyDown = (event) => {
    document.querySelector('.key:first-child').innerHTML = `${event.key}
    <small>e.key</small>`;

    document.querySelector('.key:nth-child(2)').innerHTML = `${event.keyCode}
    <small>e.keyCode</small>`;

    document.querySelector('.key:last-child').innerHTML = `${event.code}
    <small>e.code</small>`;
}; */


// Note that my when i did my own method i , the html document was still complete but for that his first dirty method he had to cut most of the file and insert them into the javascript here so that itonly comes up after you tap a key


// window.addEventListener('keydown', onKeyDown);

// His First (dirty) method

/* window.addEventListener('keydown', event => {
  const insert = document.querySelector('#insert');
  insert.innerHTML = `
       <div class="key">
         ${event.key === ' ' ? 'Space' : event.key}
         <small>event.key</small>
       </div>

       <div class="key">
         ${event.keyCode}
         <small>event.keyCode</small>
       </div>

       <div class="key">
         ${event.code}
         <small>event.code</small>
       </div>`

}); */

// Method 2 (a better way)
function showKeyCodes(event) {
  const insert = document.getElementById('insert');
  insert.innerHTML = ''; //OMG, this line is so smart. I'ts clearing out everything before carrying out the other parts of the function

  const keyCodes = {
    'event.key': event.key === ' ' ? 'Space' : event.key,
    'event.keyCode': event.keyCode,
    'event.code': event.code,
  };

  for (const key in keyCodes) {
    const div = document.createElement('div');
    div.className = 'key';
    const small = document.createElement('small');

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    insert.appendChild(div);

  };
};


window.addEventListener('keydown', showKeyCodes);