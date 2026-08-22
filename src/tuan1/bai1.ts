export class Person {
  public name: string;
  public age: number;

  public constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public displayInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
  }
}

const person = new Person("Nguyen Van A", 20);

person.displayInfo();