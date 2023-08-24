import { createAction, props } from '@ngrx/store';
import { Book } from '../books.state';

export const addBook = createAction(
  '[Books] addBook',
  props<{ title: string; author: string }>()
);

export const removeBook = createAction(
  '[Books] removeBook',
  props<{ bookId: string }>()
);

export const BooksActions = {
  addBook,
  removeBook,
};
