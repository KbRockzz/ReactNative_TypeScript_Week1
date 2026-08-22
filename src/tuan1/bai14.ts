class Employee {
    public name: string;
    public salary: number;
  
    public constructor(name: string, salary: number) {
      this.name = name;
      this.salary = salary;
    }
  
    public showInfo(): void {
      console.log(`Name: ${this.name}`);
      console.log(`Salary: $${this.salary}`);
    }
  }
  
  class Manager extends Employee {
    public manage(): void {
      console.log(`${this.name} is managing the team.`);
    }
  }
  
  class Developer extends Employee {
    public code(): void {
      console.log(`${this.name} is writing code.`);
    }
  }
  
  const manager = new Manager("John", 3000);
  const developer = new Developer("Alice", 2500);
  
  manager.showInfo();
  manager.manage();
  
  developer.showInfo();
  developer.code();