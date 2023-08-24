import { EntityState } from "@ngrx/entity";

export interface Book {
    id: string;
    title: string;
    author: string;
  }
  
  export interface BooksState extends EntityState<Book> {
    // additional entity state properties
    selectedBookId: string | null;
  }