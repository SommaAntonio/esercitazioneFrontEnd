import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*le costanti delle route indicano dove mandiamo l'utente in base al url selezionato,
'' e quello inziale che noi abbiamo impostato per partire dalla lista non avendo un login
 sotto e indicato dove andare in caso di /lista ovvero al modulo del componente che lo collega
  ai vari figli e componenti vari*/
const routes: Routes = [
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: 'lista', loadChildren: () => import('./feature/list.module').then(m => m.ListModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
