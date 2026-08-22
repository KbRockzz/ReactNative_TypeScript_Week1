class Person {
    public name: string;
    public age: number;
  
    public constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  
  class Student extends Person {
    public grade: number;
  
    public constructor(
      name: string,
      age: number,
      grade: number
    ) {
      super(name, age);
      this.grade = grade;
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
  }
  
  class School {
    public students: Student[];
    public teachers: Teacher[];
  
    public constructor(
      students: Student[],
      teachers: Teacher[]
    ) {
      this.students = students;
      this.teachers = teachers;
    }
  
    public displayInfo(): void {
      console.log("=== Students ===");
  
      this.students.forEach((student) => {
        console.log(
          `Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`
        );
      });
  
      console.log("\n=== Teachers ===");
  
      this.teachers.forEach((teacher) => {
        console.log(
          `Name: ${teacher.name}, Age: ${teacher.age}, Subject: ${teacher.subject}`
        );
      });
    }
  }
  
  const student1 = new Student("Nguyen Van A", 20, 8.5);
  const student2 = new Student("Nguyen Van B", 21, 9);
  
  const teacher1 = new Teacher("Tran Van C", 35, "Mathematics");
  const teacher2 = new Teacher("Le Thi D", 32, "English");
  
  const school = new School(
    [student1, student2],
    [teacher1, teacher2]
  );
  
  school.displayInfo();