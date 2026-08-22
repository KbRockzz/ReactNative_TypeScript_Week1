class Product {
    public name: string;
    public price: number;
  
    public constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
  }
  
  const products: Product[] = [
    new Product("Laptop", 500),
    new Product("Mouse", 50),
    new Product("Keyboard", 120),
    new Product("Monitor", 200),
  ];
  
  const expensiveProducts = products.filter(
    (product) => product.price > 100
  );
  
  console.log("Products with price > 100:");
  
  expensiveProducts.forEach((product) => {
    console.log(`${product.name}: $${product.price}`);
  });