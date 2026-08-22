class Animal {
    protected makeSound(): void {
      console.log("Animal makes a sound.");
    }
  }
  
  class Dog extends Animal {
    public makeSound(): void {
      console.log("Dog says: Woof Woof!");
    }
  }
  
  class Cat extends Animal {
    public makeSound(): void {
      console.log("Cat says: Meow Meow!");
    }
  }
  
  const dog = new Dog();
  const cat = new Cat();
  
  dog.makeSound();
  cat.makeSound();