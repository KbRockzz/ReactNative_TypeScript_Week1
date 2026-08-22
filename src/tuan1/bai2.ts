import { Person } from "./bai1";

class Student extends Person {
  public grade: number;

  public constructor(name: string, age: number, grade: number) {
    super(name, age);
    this.grade = grade;
  }

  public displayAllInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Grade: ${this.grade}`);
  }
}

// Create Student object
const student = new Student("Nguyen Van B", 21, 8.5);

student.displayAllInfo();