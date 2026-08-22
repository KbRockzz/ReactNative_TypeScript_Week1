class Animal {
    public sound(): void {
      console.log("Animal makes a sound.");
    }
  }
  
  class Dog extends Animal {
    public override sound(): void {
      console.log("Dog says: Woof Woof!");
    }
  }
  
  class Cat extends Animal {
    public override sound(): void {
      console.log("Cat says: Meow Meow!");
    }
  }
  
  const animals: Animal[] = [
    new Dog(),
    new Cat(),
  ];
  
  animals.forEach((animal) => {
    animal.sound();
  });