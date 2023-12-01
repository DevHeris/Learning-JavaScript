// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

// =========== MINE
function avg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum / arr.length);
}

avg([0, 50]);
avg([75, 76, 80, 95, 100]);

// ============== HIS
function avg2(arr) {
  let total = 0;
  for (const num of arr) {
    total += num;
  }

  return total / arr.length;
}
// Run in console
