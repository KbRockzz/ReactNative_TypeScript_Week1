class Stack<T> {
    private items: T[] = [];
  
    public push(item: T): void {
      this.items.push(item);
    }
  
    public pop(): T | undefined {
      return this.items.pop();
    }
  
    public peek(): T | undefined {
      return this.items[this.items.length - 1];
    }
  
    public isEmpty(): boolean {
      return this.items.length === 0;
    }
  }
  
  const stack = new Stack<number>();
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log(`Top: ${stack.peek()}`);
  console.log(`Pop: ${stack.pop()}`);
  console.log(`Top after pop: ${stack.peek()}`);
  console.log(`Is empty: ${stack.isEmpty()}`);