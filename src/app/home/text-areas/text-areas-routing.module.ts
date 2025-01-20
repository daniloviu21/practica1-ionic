import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextAreasPage } from './text-areas.page';

const routes: Routes = [
  {
    path: '',
    component: TextAreasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextAreasPageRoutingModule {}
