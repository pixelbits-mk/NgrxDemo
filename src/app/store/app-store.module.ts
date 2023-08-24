import { NgModule } from "@angular/core";
import { BooksModule } from "./books/books.module";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./app.state";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
    imports: [ 
        EffectsModule.forRoot([]),
        StoreModule.forRoot(reducers)
        // StoreModule.forFeature('featureName', reducers)
    ]
})
export class AppStoreModule {

}