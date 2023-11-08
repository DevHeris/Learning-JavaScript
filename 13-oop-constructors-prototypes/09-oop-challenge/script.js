function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.gainXp = function (num) {
  this.points = this.points + num;
  if (this.points >= 10) {
    this.lvl = this.lvl + 1;
    this.points = this.points - 10;
  }
  return this.points;
};

Player.prototype.describe = function () {
  return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
};

let player1 = new Player("Heris");
let player2 = new Player("Eni");

player1.gainXp(5);
player2.gainXp(7);

player1.gainXp(3);
player2.gainXp(2);

player1.gainXp(8);
player2.gainXp(4);

console.log(player1.describe());
console.log(player2.describe());
