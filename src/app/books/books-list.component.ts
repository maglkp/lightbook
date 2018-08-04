import { Component } from '@angular/core';

@Component({
  selector: 'books-list',
  template: `<div>
                <h1>{{book.name}}</h1>
                <hr/>
                <div class="well hoverwell thumbnail">
                    <div>Author: {{book.author}}</div>
                    <div>Review: {{book.reviewEn}}</div>
                </div>
             </div>`
})
export class BooksListComponent {
    book = {
        id: 1,
        name: 'Factfulness',
        author: 'Hans Rosling',
        reviewPl: 'OMG WTF',
        reviewEn: 'This book will kill you.'        
    }
}
