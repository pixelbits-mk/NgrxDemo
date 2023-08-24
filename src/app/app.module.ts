import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppStoreModule,
    FormsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
    
      maxAge: 25, // specify the maximum number of actions to keep in history
      // Other options go here
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
