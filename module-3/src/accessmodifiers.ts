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

  private addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    this.userBalance;
  }
}

const topuVaiAccount = new BankAccount(111, "Topu56", 20);
topuVaiAccount.addBalance(100);
topuVaiAccount.addBalance(100);

console.log(topuVaiAccount);
