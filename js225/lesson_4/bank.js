function makeAccount(id) {
  let transactions = [];
  let balance = 0;
  return {
    number(){
      return id
    },
    transactions(){
      return transactions
    },
    balance(){
      return balance
    },
    deposit(deposit){
      balance += deposit;
      transactions.push({
        type: "deposit",
        amount: deposit,
      });
      return balance
    },
    withdraw(amount){
      if (amount > balance) {
        amount = balance;
      }
      balance -= amount;
      transactions.push({
        type: "withdraw",
        amount: amount,
      });
      return amount
    }
  };
}

function makeBank() {
  let accounts = [];
  return {
    openAccount(){
      let account = makeAccount(this.nextId)
      accounts.push(account)
      this.nextId += 1;
      return account
    },
    nextId: 101,
    transfer(source, dest, amount){
      source.withdraw(amount);
      dest.deposit(amount);
      return amount
    },
  }
}
let bank = makeBank();
let account = bank.openAccount();
account.deposit(10)
let secondAccount = bank.openAccount();
bank.transfer(account, secondAccount, 7);
console.log(account.balance());
console.log(secondAccount.balance());
console.log(bank.accounts);

