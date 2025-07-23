import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-orders',
  standalone: false,
  templateUrl: './manage-orders.page.html',
  styleUrls: ['./manage-orders.page.scss'],
})
export class ManageOrdersPage {
  orders = [
    {
      id: 1,
      user: 'user@bookify.com',
      book: 'The Alchemist',
      date: '2025-07-22',
      status: 'Pending',
    },
    {
      id: 2,
      user: 'user@bookify.com',
      book: 'Atomic Habits',
      date: '2025-07-23',
      status: 'Approved',
    },
  ];

  updateStatus(orderId: number, status: string) {
    const order = this.orders.find((o) => o.id === orderId);
    if (order) {
      order.status = status;
    }
  }
}
