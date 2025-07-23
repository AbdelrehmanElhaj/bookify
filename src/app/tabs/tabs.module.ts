import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsRoutingModule } from './tabs-routing.module';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs/tabs.page';



@NgModule({
  declarations: [
    TabsPage
  ],
  imports: [
    CommonModule,
    TabsRoutingModule,
    IonicModule,
  ]
})
export class TabsModule { }
