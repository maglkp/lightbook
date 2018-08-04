import { Component } from '@angular/core';

@Component({
  selector: 'books-app',
  template: `<books-list></books-list>`
})
export class BooksAppComponent {
  title = 'Lightbook app';
}
