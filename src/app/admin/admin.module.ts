import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ManageBooksPage } from './pages/manage-books/manage-books.page';
import { ManageOrdersPage } from './pages/manage-orders/manage-orders.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    DashboardPage,
    ManageBooksPage,
    ManageOrdersPage,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
