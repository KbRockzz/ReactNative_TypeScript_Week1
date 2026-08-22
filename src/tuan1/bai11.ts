  class Animal {
    public name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  }
  
  class Dog extends Animal {
    public bark(): void {
      console.log(`${this.name} says: Woof Woof!`);
    }
  }
  
  class Cat extends Animal {
    public meow(): void {
      console.log(`${this.name} says: Meow Meow!`);
    }
  }
  
  const dog = new Dog("Buddy");
  const cat = new Cat("Kitty");
  
  dog.bark();
  cat.meow();