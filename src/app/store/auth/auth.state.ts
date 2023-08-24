import { EntityState } from "@ngrx/entity";
export interface User {
    username: string
}
export interface Auth {
    user: User
  }
  
  export interface AuthState {
    loggedIn: boolean;
    user: User | null
  }