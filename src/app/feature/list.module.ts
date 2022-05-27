import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContainerComponent } from './list-container/list-container.component';

import { ListRoutingModule } from './list-routing.module';
import { SharedModule } from '../shared/shared-module.module';
import { ListCreateComponent } from './list-create/list-create.component';
import { FormsModule } from '@angular/forms';
import { ListUpdateComponent } from './list-update/list-update.component';
import { ListSearchComponent } from './list-search/list-search.component';



@NgModule({
  //nelle declarations vanno messi tutti i componenti figli+ il padre che si collegeranno a questo modulo
  declarations: [
    ListContainerComponent,
    ListCreateComponent,
    ListUpdateComponent,
    ListSearchComponent
  ],
  //negli imports mettiamo i moduli che verrano poi usati dai vari components
  imports: [
    CommonModule,
    SharedModule,
    ListRoutingModule,
    FormsModule
  ],
  //si esporta solo il padre
  exports: [
    ListContainerComponent
  ]
})
export class ListModule { }
