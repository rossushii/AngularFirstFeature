import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs: Blog[] = [
    { id: 1, title: 'Blog 1', description: 'Description 1', author: 'Author 1', comments: [] },
    { id: 2, title: 'Blog 2', description: 'Description 2', author: 'Author 2', comments: [] },
    { id: 3, title: 'Blog 3', description: 'Description 3', author: 'Author 3', comments: [] }
  ];

  constructor() {}

  getAllBlogs(): Blog[] {
    return this.blogs;
  }
}
