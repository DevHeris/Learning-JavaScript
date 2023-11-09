class Wallet {
  #balance = 0;
  #transactions = [];

  deposit(amount) {
    this.#processDeposit(amount);
    this.#balance += amount;
  }

  #processDeposit(amount) {
    console.log(`Depositing $${amount}`);

    this.#transactions.push({
      type: "deposit",
      amount,
    });
  }

  withdraw(amount) {
    this.#processWithdraw(amount);
    if (amount > this.#balance) {
      console.log("Insufficient funds");
      return;
    }

    this.#balance -= amount;
  }

  #processWithdraw(amount) {
    console.log(`Withdrawing $${amount}`);

    this.#transactions.push({
      type: "withdraw",
      amount,
    });
  }

  get balance() {
    return this.#balance;
  }

  get transactions() {
    return this.#transactions;
  }
}

// So the only things that are public are the two getters and withdrawal and deposit methods

const wallet = new Wallet();

wallet.deposit(600);
wallet.withdraw(50);

console.log(wallet.balance);
