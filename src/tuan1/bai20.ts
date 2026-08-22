interface Vehicle {
    brand: string;
    start(): void;
  }
  
  class Car implements Vehicle {
    public brand: string;
  
    public constructor(brand: string) {
      this.brand = brand;
    }
  
    public start(): void {
      console.log(`${this.brand} car is starting.`);
    }
  }
  
  class Bike implements Vehicle {
    public brand: string;
  
    public constructor(brand: string) {
      this.brand = brand;
    }
  
    public start(): void {
      console.log(`${this.brand} bike is starting.`);
    }
  }
  
  const car = new Car("Toyota");
  const bike = new Bike("Honda");
  
  car.start();
  bike.start();