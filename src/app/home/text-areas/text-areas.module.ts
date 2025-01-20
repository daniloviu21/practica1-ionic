import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextAreasPageRoutingModule } from './text-areas-routing.module';

import { TextAreasPage } from './text-areas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextAreasPageRoutingModule
  ],
  declarations: [TextAreasPage]
})
export class TextAreasPageModule {}
