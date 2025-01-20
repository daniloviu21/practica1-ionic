import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'chips',
    loadChildren: () => import('./chips/chips.module').then( m => m.ChipsPageModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./buttons/buttons.module').then( m => m.ButtonsPageModule)
  },
  {
    path: 'inputs',
    loadChildren: () => import('./inputs/inputs.module').then( m => m.InputsPageModule)
  },
  {
    path: 'alerts',
    loadChildren: () => import('./alerts/alerts.module').then( m => m.AlertsPageModule)
  },
  {
    path: 'pickers',
    loadChildren: () => import('./pickers/pickers.module').then( m => m.PickersPageModule)
  },
  {
    path: 'text-areas',
    loadChildren: () => import('./text-areas/text-areas.module').then( m => m.TextAreasPageModule)
  },
  {
    path: 'item-groups',
    loadChildren: () => import('./item-groups/item-groups.module').then( m => m.ItemGroupsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
