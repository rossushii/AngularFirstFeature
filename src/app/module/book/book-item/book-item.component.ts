import { Component, Input } from '@angular/core';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {
  @Input() book?: Book;

  constructor() { }

  editBook(): void {
    // Implement edit logic here, you can emit an event to the parent component
    console.log('Editing book:', this.book);
  }

  deleteBook(): void {
    // Implement delete logic here, you can emit an event to the parent component
    console.log('Deleting book:', this.book);
  }
}
