import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckboxsPageRoutingModule } from './checkboxs-routing.module';

import { CheckboxsPage } from './checkboxs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxsPageRoutingModule
  ],
  declarations: [CheckboxsPage]
})
export class CheckboxsPageModule {}
