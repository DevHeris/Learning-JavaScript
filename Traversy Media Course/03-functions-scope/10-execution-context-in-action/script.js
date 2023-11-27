const x = 100;
const y = 50;

function getSum(n1, n2) {
    const sum = n1 + n2;
    return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1, sum2);

//  We used the debugger tool in the browser to see how javascript does the memory creation phase and the execution phase. Remember we added a break point at line 1 so the code wont just run immediately the browser loads