import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { AuthState } from '../auth.state';

 
export const selectAuthState = createFeatureSelector<AuthState>('auth');
 

export const selectUser = createSelector(
    selectAuthState,
    (state: AuthState) => state.user
);

export const selectLoggedIn = createSelector(
    selectAuthState,
    (state: AuthState) => state.loggedIn
)

export const AuthSelectors = {
    selectUser,
    selectLoggedIn
}