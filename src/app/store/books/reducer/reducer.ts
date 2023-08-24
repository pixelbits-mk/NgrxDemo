import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Book, BooksState } from "../books.state";
import { Action, createReducer, on } from "@ngrx/store";
import { BooksActions } from "../actions/actions";

let id = 0;
export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialState: BooksState = adapter.getInitialState({
    selectedBookId: null
})

export const booksReducer = createReducer(
    initialState,
    on(BooksActions.addBook, (state: BooksState, { title, author }): BooksState => {
        return adapter.addOne({ id: (++id).toString(), title, author }, state)
    }),
    on(BooksActions.removeBook, (state: BooksState, { bookId } ): BooksState => {
        return adapter.removeOne(bookId, state)
    }),
  );