import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UserRoutingModule } from './user-routing.module';

import { BookListPage } from './pages/book-list/book-list.page';
import { BookDetailsPage } from './pages/book-details/book-details.page';
import { ProfilePage } from './pages/profile/profile.page';
import { BookingFlowPage } from './pages/booking-flow/booking-flow.page';

@NgModule({
  declarations: [
    BookListPage,
    BookDetailsPage,
    ProfilePage,       // ✅ make sure it's declared here
    BookingFlowPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserRoutingModule,
  ],
})
export class UserModule {}
