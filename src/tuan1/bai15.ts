class Book {
    public title: string;
    public author: string;
  
    public constructor(title: string, author: string) {
      this.title = title;
      this.author = author;
    }
  }
  
  class User {
    public name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  }
  
  class Library {
    public books: Book[];
    public users: User[];
  
    public constructor() {
      this.books = [];
      this.users = [];
    }
  
    public addBook(book: Book): void {
      this.books.push(book);
    }
  
    public showBooks(): void {
      this.books.forEach((book) => {
        console.log(`${book.title} - ${book.author}`);
      });
    }
  }
  
  const library = new Library();
  
  const book1 = new Book("Harry Potter", "J.K. Rowling");
  const book2 = new Book("The Hobbit", "J.R.R. Tolkien");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.showBooks();