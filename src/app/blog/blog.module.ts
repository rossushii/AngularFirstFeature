import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogService } from './services/blog.service';

@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlogListComponent,
    BlogItemComponent
    
  ],
  providers: [BlogService]
})
export class BlogModule { }
