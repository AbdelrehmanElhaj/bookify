import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  standalone: false,
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage {
  book: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.book = nav?.extras?.state?.['book'];
  }

  goToBooking() {
    this.router.navigate(['/user/pages/booking-flow'], { state: { book: this.book } });
  }
}
