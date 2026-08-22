interface Flyable {
    fly(): void;
  }
  
  interface Swimmable {
    swim(): void;
  }
  
  class Bird implements Flyable {
    public fly(): void {
      console.log("Bird is flying.");
    }
  }
  
  class Fish implements Swimmable {
    public swim(): void {
      console.log("Fish is swimming.");
    }
  }
  
  const bird = new Bird();
  const fish = new Fish();
  
  bird.fly();
  fish.swim();