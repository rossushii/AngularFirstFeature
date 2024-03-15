import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookItemComponent } from './book-item/book-item.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookListComponent,
    BookItemComponent
  ],
  providers: [BookService]
})
export class BookModule { }
