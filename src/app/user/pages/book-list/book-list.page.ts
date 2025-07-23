import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: false,
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage {
  books = [
    {
      id: 1,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      image: 'https://via.placeholder.com/150',
      rating: 4.5,
      description: 'A mystical journey of self-discovery.',
    },
    {
      id: 2,
      title: 'Atomic Habits',
      author: 'James Clear',
      image: 'https://via.placeholder.com/150',
      rating: 4.8,
      description: 'Tiny changes, remarkable results.',
    },
  ];

  constructor(private router: Router) {}

  viewDetails(book: any) {
    this.router.navigate(['/user/pages/book-details'], { state: { book } });
  }
}
