class Car {
    public brand: string;
    public model: string;
    public year: number;
  
    public constructor(
      brand: string,
      model: string,
      year: number
    ) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    public showInfo(): void {
      console.log(`Brand: ${this.brand}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
    }
  }
  
  const car = new Car("Toyota", "Camry", 2024);
  
  car.showInfo();