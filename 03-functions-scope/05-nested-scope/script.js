{
    // outer block
    let x = { color: "blue" };
    let y = x; // y and x refer to the same object
    let z = 3;
    {
        // inner block
        let x = 5; // outer x now masked
        console.log(x); // logs 5
        console.log(y.color); // logs "blue"; object pointed to by
        // y (and x in the outer scope) is
        // still in scope
        y.color = "red";
        console.log(z); // logs 3; z has not been masked
    }
    console.log(x.color); // logs "red"; object modified in
}


// Video lesson starts
function first() {
    const x = 100;

    function second() {//Nested scope
        const y = 200;
        console.log(x + y);
    }
    // console.log(y);//y is not defined

    second();
}

first(); //300

// Note from that illustration is that; from a child function you can access the variables in the parent function but the parent function cant access a variable in the child function. This is also similar with blocks

if (true) {
    const x = 100;
    if (x === 100) {
        const y = 200;
        console.log(x + y);
    }
    // console.log(y); wont work cause parent cant access the variables in the child
}

// Video Lesson Ends