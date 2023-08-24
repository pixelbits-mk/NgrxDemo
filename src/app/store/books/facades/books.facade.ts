import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { BooksActions } from "../actions/actions";
import { Observable } from "rxjs";
import { Book } from "../books.state";
import { BooksSelectors, selectAllBooks } from "../selectors/selectors";
import { AppState } from "../../app.state";

@Injectable({ providedIn: 'root' })
export class BooksFacade {
    books$ = this.store.select(BooksSelectors.selectAllBooks);
    bookTotal$ = this.store.select(BooksSelectors.selectBookTotal)
    
    constructor(private store: Store<AppState>) {

    }
    addBook(title: string, author: string) {
        this.store.dispatch(BooksActions.addBook({ title, author}))
    }
    removeBook(bookId: string) {
        this.store.dispatch(BooksActions.removeBook({ bookId }))
    }
}
