interface Animal {
    name: string;
    sound(): void;
  }
  
  class Dog implements Animal {
    public name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public sound(): void {
      console.log("Woof Woof!");
    }
  }
  
  const dog = new Dog("Buddy");
  
  console.log(`Name: ${dog.name}`);
  dog.sound();