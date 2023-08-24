import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

// Selectors for books
export const selectBooks = (state: AppState) => state.books;

// Selectors for authentication
export const selectAuth = (state: AppState) => state.auth;


export const selectCombinedData = createSelector(
    selectBooks,
    selectAuth,
    (books, auth) => {
      // Combine the data as needed
      return {
        books,
        auth,
        // Other combined data properties
      };
    }
  );