// access >> modify

class BankAccount {
  public readonly userId: number;
  public userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  // addBalance(balance: number) {
  //   this.userBalance = this.userBalance + balance;
  // }

  // setter user kore korte hbe
  set addBalance(amount: number) {
    this.userBalance = this.userBalance + amount;
  }

  //   get korbo
  // getBalance() {
  //   return this.userBalance;
  // }

  // gettter user kore get korte cai

  get getBalance() {
    return this.userBalance;
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    this.userBalance;
  }
}

const topuVaiAccount = new BankAccount(111, "Topu56", 20);
// topuVaiAccount.addBalance(100); //function call korte hcce
// topuVaiAccount.addBalance(100);

// console.log(topuVaiAccount.getBalance()); // function call him

topuVaiAccount.addBalance = 100;
console.log(topuVaiAccount.getBalance);
console.log(topuVaiAccount);
