import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Book, BooksState } from '../books.state';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
export function selectBookId(book: Book): string {
  return book.id;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>({
  selectId: selectBookId,
});

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
export const selectBookState = createFeatureSelector<BooksState>('books');
 

export const selectAllBooks = createSelector(
  selectBookState,
  (bookState) => selectAll(bookState)
)

export const selectBookEntities = createSelector(
  selectBookState,
  (booksState) => selectEntities(booksState) 
)

export const selectBookTotal = createSelector(
  selectAllBooks,
  (books) => books.length
)


export const BooksSelectors = {
  selectAllBooks,
  selectBookEntities,
  selectBookTotal
}