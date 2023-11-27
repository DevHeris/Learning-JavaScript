function* createTeamIterator(teams) {
  for (let i = 0; i < teams.length; i++) {
    yield teams[i];
  }
}

const teams = ["Red Sox", "Yankees", "Astros", "Dogers"];

const iterator = createTeamIterator(teams);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (const team of createTeamIterator(teams)) {
  console.log(team);
}

console.log([...createTeamIterator(teams)]);

const [first, second, third] = createTeamIterator(teams);

console.log(first, second, third);g
