import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ManageBooksPage } from './pages/manage-books/manage-books.page';
import { ManageOrdersPage } from './pages/manage-orders/manage-orders.page';

const routes: Routes = [
  { path: 'pages/dashboard', component: DashboardPage },
  { path: 'pages/manage-books', component: ManageBooksPage },
  { path: 'pages/manage-orders', component: ManageOrdersPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
