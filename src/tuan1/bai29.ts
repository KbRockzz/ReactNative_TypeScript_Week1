interface Movable {
    move(): void;
  }
  
  class Car implements Movable {
    public move(): void {
      console.log("Car is moving.");
    }
  }
  
  class Robot implements Movable {
    public move(): void {
      console.log("Robot is moving.");
    }
  }
  
  const car = new Car();
  const robot = new Robot();
  
  car.move();
  robot.move();