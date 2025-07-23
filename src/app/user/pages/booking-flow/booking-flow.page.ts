import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-flow',
  standalone: false,
  templateUrl: './booking-flow.page.html',
  styleUrls: ['./booking-flow.page.scss'],
})
export class BookingFlowPage {
  book: any;
  date: string = '';

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.book = nav?.extras?.state?.['book'];
  }

  confirmBooking() {
    alert(`Booking confirmed for "${this.book.title}" on ${this.date}`);
    this.router.navigate(['/tabs']);
  }
}
