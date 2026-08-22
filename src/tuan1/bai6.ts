class Book {
    public title: string;
    public author: string;
    public year: number;
  
    public constructor(
      title: string,
      author: string,
      year: number
    ) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    public showInfo(): void {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`Year: ${this.year}`);
    }
  }
  
  const book = new Book(
    "Harry Potter",
    "J.K. Rowling",
    1997
  );
  
  book.showInfo();