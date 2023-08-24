import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

@NgModule({
    imports: [
        StoreModule.forFeature('books', {})
    ]
})
export class BooksModule {

}