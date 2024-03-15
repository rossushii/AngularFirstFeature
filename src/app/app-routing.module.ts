import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog/pages/blog-list/blog-list.component';
import { BookListComponent } from './module/book/book-list/book-list.component';
import { UserComponent } from './user/components/user/user.component';

const routes: Routes = [
  { path: 'blog', component: BlogListComponent },
  { path: 'book', component: BookListComponent },
  { path: 'profile', component: UserComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
