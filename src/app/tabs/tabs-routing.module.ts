import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { BookListPage } from '../user/pages/book-list/book-list.page';
import { ProfilePage } from '../user/pages/profile/profile.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'book-list',
        component: BookListPage,
      },
      {
        path: 'profile',
        component: ProfilePage,
      },
      {
        path: '',
        redirectTo: 'book-list',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
