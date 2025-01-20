import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemGroupsPage } from './item-groups.page';

const routes: Routes = [
  {
    path: '',
    component: ItemGroupsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemGroupsPageRoutingModule {}
