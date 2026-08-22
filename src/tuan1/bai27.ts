class Person {
    public name: string;
    public age: number;
  
    public constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  
  class Teacher extends Person {
    public subject: string;
  
    public constructor(
      name: string,
      age: number,
      subject: string
    ) {
      super(name, age);
      this.subject = subject;
    }
  
    public introduce(): void {
      console.log(
        `My name is ${this.name}, I am ${this.age} years old, and I teach ${this.subject}.`
      );
    }
  }
  
  const teacher = new Teacher(
    "Nguyen Van A",
    35,
    "Mathematics"
  );
  
  teacher.introduce();