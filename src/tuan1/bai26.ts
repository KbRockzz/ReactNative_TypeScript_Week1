class Product {
    public name: string;
    public price: number;
  
    public constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
  }
  
  class Order {
    public products: Product[];
  
    public constructor(products: Product[]) {
      this.products = products;
    }
  
    public calculateTotal(): number {
      return this.products.reduce(
        (total, product) => total + product.price,
        0
      );
    }
  }
  
  const product1 = new Product("Laptop", 1000);
  const product2 = new Product("Mouse", 50);
  const product3 = new Product("Keyboard", 100);
  
  const order = new Order([
    product1,
    product2,
    product3,
  ]);
  
  console.log(`Total price: $${order.calculateTotal()}`);