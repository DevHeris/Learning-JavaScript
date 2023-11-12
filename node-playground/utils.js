function capitalizeWords(string) {
  return string
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ");
}

function makeMoney(amount) {
  return `$${amount}`;
}

module.exports = { capitalizeWords, makeMoney };
