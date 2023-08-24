import { combineReducers } from "@ngrx/store";
import { AuthState } from "./auth/auth.state";
import { BooksState } from "./books/books.state";
import { authReducer } from "./auth/reducer/reducer";
import { booksReducer } from "./books/reducer/reducer";
// feature.module.ts
import { StoreModule, ActionReducerMap } from '@ngrx/store';

export const reducers: ActionReducerMap<any> = {
  auth: authReducer,
  books: booksReducer,
};

export interface AppState {
    auth: AuthState
    books: BooksState
  }

  // export const rootReducer = combineReducers({
  //   auth: authReducer,
  //   books: booksReducer,
  //   // Add more feature reducers here
  // });