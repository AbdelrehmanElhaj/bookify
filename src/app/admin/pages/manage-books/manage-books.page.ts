import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-books',
  standalone: false,
  templateUrl: './manage-books.page.html',
  styleUrls: ['./manage-books.page.scss'],
})
export class ManageBooksPage {
  books = [
    {
      id: 1,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      rating: 4.5,
    },
    {
      id: 2,
      title: 'Atomic Habits',
      author: 'James Clear',
      rating: 4.8,
    },
  ];
}
