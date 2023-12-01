// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

// ============================================================== //
// Solution

function pick(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function getCard() {
  const valuesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const suitsArr = ["clubs", "spades", "hearts", "diamonds"];
  // console.log({
  //   value: pick(valuesArr),
  //   suit: pick(suitsArr),
  // });
  return {
    value: pick(valuesArr),
    suit: pick(suitsArr),
  };
}

getCard();
// ============================================================== //
