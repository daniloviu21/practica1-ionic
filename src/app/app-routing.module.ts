import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./home/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./home/cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'chips',
    loadChildren: () => import('./home/chips/chips.module').then( m => m.ChipsPageModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./home/buttons/buttons.module').then( m => m.ButtonsPageModule)
  },
  {
    path: 'inputs',
    loadChildren: () => import('./home/inputs/inputs.module').then( m => m.InputsPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'checkboxs',
    loadChildren: () => import('./home/checkboxs/checkboxs.module').then( m => m.CheckboxsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
