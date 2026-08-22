class User {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    // Getter
    public getName(): string {
      return this.name;
    }
  
    // Setter
    public setName(name: string): void {
      this.name = name;
    }
  }
  
  const user = new User("Nguyen Van A");
  
  console.log(`Name: ${user.getName()}`);
  
  user.setName("Nguyen Van B");
  
  console.log(`New name: ${user.getName()}`);