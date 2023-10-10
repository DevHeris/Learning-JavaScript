// Break allows us to break out of a loop
for (let i = 0; i <= 20; i++) {
    if (i === 15) {
        console.log('Breaking...');
        break;
    }

    console.log(i);
}

// Continue skips the rest of the code in the current iteration and then continue with the next
for (let i = 0; i <= 20; i++) {
    if (i === 13) {
        console.log('Skipping the 13th floor');
        continue;
    }
    console.log(i);
}