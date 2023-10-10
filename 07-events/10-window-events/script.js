// Page Loading Events

/* window.onload = function () {
    document.querySelector('h1').textContent = "Welcome to Onigashima";
}; */

// Another method

window.addEventListener('load', () => console.log('Page Loaded')
);

window.addEventListener('DOMContentLoaded', console.log('DOM Loaded')
);

window.addEventListener('resize', () => {
    document.querySelector('h1').innerHTML = `Window resized to ${window.innerWidth} x ${window.innerHeight}`
});

window.addEventListener('scroll', () => {
    console.log(`scrolled: ${window.scrollX} x ${window.scrollY}`);

    if (window.scrollY > 200 && window.scrollY < 500) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else if (window.scrollY > 500) {
        document.body.style.backgroundColor = 'green';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    };
});

window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'yellow';
    });
});


window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'red';
    });
});