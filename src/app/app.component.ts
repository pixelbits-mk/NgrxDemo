import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthFacade } from './store/auth/facades/auth.facade';
import { BooksFacade } from './store/books/facades/books.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginForm: FormGroup;
  bookForm: FormGroup
  books$ = this.booksFacade.books$;
  bookTotal$ = this.booksFacade.bookTotal$;
  
  constructor(private authFacade: AuthFacade, private booksFacade: BooksFacade) {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
    this.bookForm = new FormGroup({ 
      title: new FormControl(''),
      author: new FormControl('')
    })
  }

  login() {
    if (this.loginForm.valid) {
      const loginForm = this.loginForm.value;
      this.authFacade.login(loginForm.username, loginForm.password)
    }
  }
  addBook() {
    if (this.bookForm.valid) {
      const bookForm = this.bookForm.value;
      this.booksFacade.addBook(bookForm.title, bookForm.author)
    }
  }
  removeBook(bookId: string) {
    if (this.bookForm.valid) {
      this.booksFacade.removeBook(bookId)
    }
  }
  
  title = 'NgrxDemo';
}
