import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AuthActions } from "../actions/actions";
import { AuthSelectors } from "../selectors/selectors";

@Injectable({ providedIn: 'root' })
export class AuthFacade {
    user$ = this.store.select(AuthSelectors.selectUser)
    loggedIn$ = this.store.select(AuthSelectors.selectLoggedIn)
    
    constructor(private store: Store) {

     }
    login(username: string, password: string ) {
        this.store.dispatch(AuthActions.login({ username, password }))
    }
}