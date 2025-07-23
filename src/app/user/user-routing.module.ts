import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListPage } from './pages/book-list/book-list.page';
import { BookDetailsPage } from './pages/book-details/book-details.page';
import { ProfilePage } from './pages/profile/profile.page';
import { BookingFlowPage } from './pages/booking-flow/booking-flow.page';

const routes: Routes = [
  { path: 'pages/book-list', component: BookListPage },
  { path: 'pages/book-details', component: BookDetailsPage },
  { path: 'pages/profile', component: ProfilePage },
  { path: 'pages/booking-flow', component: BookingFlowPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
