class BankAccount {
    public balance: number;
  
    public constructor(balance: number) {
      this.balance = balance;
    }
  
    public deposit(amount: number): void {
      this.balance += amount;
    }
  
    public withdraw(amount: number): void {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log("Insufficient balance.");
      }
    }
  }
  
  const account = new BankAccount(1000);
  
  account.deposit(500);
  console.log(`Balance after deposit: ${account.balance}`);
  
  account.withdraw(300);
  console.log(`Balance after withdraw: ${account.balance}`);