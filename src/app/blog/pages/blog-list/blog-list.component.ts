import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getAllBlogs();
  }
  editBlog(): void {
    // Implement edit logic here, you can emit an event to the parent component
    console.log('Editing blog:', this.blogs);
  }

  deleteBlog(): void {
    // Implement delete logic here, you can emit an event to the parent component
    console.log('Deleting book:', this.blogs);
  }
}

console.log('BLOG! Is this working???')