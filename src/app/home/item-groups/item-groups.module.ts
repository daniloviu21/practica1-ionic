import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemGroupsPageRoutingModule } from './item-groups-routing.module';

import { ItemGroupsPage } from './item-groups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemGroupsPageRoutingModule
  ],
  declarations: [ItemGroupsPage]
})
export class ItemGroupsPageModule {}
