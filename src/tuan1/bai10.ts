class Account {
    public accountNumber: string;
    private balance: number;
    public readonly owner: string;
  
    public constructor(
      accountNumber: string,
      balance: number,
      owner: string
    ) {
      this.accountNumber = accountNumber;
      this.balance = balance;
      this.owner = owner;
    }
  
    public showInfo(): void {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Balance: ${this.balance}`);
      console.log(`Owner: ${this.owner}`);
    }
  }
  
  const account = new Account(
    "ACC001",
    1000,
    "Nguyen Van A"
  );
  
  account.showInfo();
  
  console.log(account.accountNumber);
  console.log(account.owner);