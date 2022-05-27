import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListContainerComponent } from './list-container/list-container.component';
import { ListCreateComponent } from './list-create/list-create.component';
import { ListUpdateComponent } from './list-update/list-update.component';
import { ListSearchComponent } from './list-search/list-search.component';


//il list routing serve per indirizzare dal padre ai vari figli 
const routes: Routes = [
  { path: '', component: ListContainerComponent },
  { path: 'creazione/', component: ListCreateComponent },
  { path: 'modifica/:id', component: ListUpdateComponent },
  { path: 'search/', component: ListSearchComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class ListRoutingModule { }
