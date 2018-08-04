import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BooksAppComponent } from './app.component';
import { BooksListComponent } from './books/books-list.component'

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    BooksAppComponent,
    BooksListComponent    
  ],  
  providers: [],
  bootstrap: [BooksAppComponent]
})
export class AppModule { }
