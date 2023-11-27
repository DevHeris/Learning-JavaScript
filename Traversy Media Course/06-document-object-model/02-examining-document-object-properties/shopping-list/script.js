let output;
// all property
output = document.all;
output = document.all[11];
output = document.all.length;//36

// documentElement
output = document.documentElement;

output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children;

// doctype
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet; //UTF-8
output = document.contentType; //text / html


output = document.forms;
output = document.forms[0];
output = document.forms[0].id; //item-form
output = document.forms[0].method; //get by default
output = document.forms[0].action; //i.e where the form should be submitted to which in this case is the same page you are on

// Changing the value of an attribute
// document.forms[0].id='new-id'
// document.links[0].className='google-link';

// Getting all the classes in an element as an array
// output = document.links[0].classList;

// converting the HTML collection to an actual array
const forms = Array.from(document.forms);

forms.forEach(form => {
    console.log(form);
});

console.log(output);