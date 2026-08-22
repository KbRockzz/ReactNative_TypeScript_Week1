class Repository<T> {
    private items: T[] = [];
  
    public add(item: T): void {
      this.items.push(item);
    }
  
    public getAll(): T[] {
      return this.items;
    }
  }
  
  class User {
    public name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  }
  
  const userRepository = new Repository<User>();
  
  userRepository.add(new User("Nguyen Van A"));
  userRepository.add(new User("Nguyen Van B"));
  
  console.log(userRepository.getAll());