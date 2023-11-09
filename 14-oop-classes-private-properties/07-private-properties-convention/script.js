class Wallet {
  constructor() {
    // So we won't expose these two properties to the world(Encapsulation), so we used a getter instead
    this._balance = 0;
    this._transactions = [];
  }

  deposit(amount) {
    this._processDeposit(amount);
    this._balance += amount;
  }

  _processDeposit(amount) {
    console.log(`Depositing $${amount}`);

    this._transactions.push({
      type: "deposit",
      amount,
    });
  }

  withdraw(amount) {
    this._processWithdaw(amount);
    if (amount > this._balance) {
      console.log("Insufficient funds");
      return;
    }

    this._balance -= amount;
  }

  _processWithdaw(amount) {
    console.log(`Withdrawing $${amount}`);

    this._transactions.push({
      type: "withdraw",
      amount,
    });
  }

  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
  }
}

const wallet = new Wallet();

wallet.deposit(300);
wallet.withdraw(50);

console.log(wallet.balance);
console.log(wallet.transactions);
