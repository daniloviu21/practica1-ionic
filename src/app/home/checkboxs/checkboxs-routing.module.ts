import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckboxsPage } from './checkboxs.page';

const routes: Routes = [
  {
    path: '',
    component: CheckboxsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckboxsPageRoutingModule {}
