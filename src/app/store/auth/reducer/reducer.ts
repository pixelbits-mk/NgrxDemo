import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Auth, AuthState } from "../auth.state";
import { AuthActions } from "../actions/actions";
import { Action, createReducer, on } from "@ngrx/store";

export const initialState: AuthState = {
    loggedIn: false,
    user: null
}

export const authReducer = createReducer(
    initialState,
    on(AuthActions.login, (state: AuthState, { username, password }) => {
        return {
            ...state,
            loggedIn: true
        }
    }),
  );