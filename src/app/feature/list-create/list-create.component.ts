import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ListService } from 'src/app/core/service/list.service';
import { ListaTodo } from 'src/app/shared/model/list-model.model';

@Component({
  selector: 'ese-list-create',
  templateUrl: './list-create.component.html',
  styleUrls: ['./list-create.component.css']
})
export class ListCreateComponent implements OnInit {

  //injection del service e del router
  constructor(private listService: ListService, private router: Router) { }
  //creo la lista vuota ListaTodo
  lista: ListaTodo = {} as ListaTodo;
  id: number = 0;
  todo: string = '';
  stato: string = '';
  dataInizio: Date = new Date;
  scadenza: Date = new Date;
  //metodo di creazione della lista dove a ogni nome della lista viene dato un valore per poi essere
  //mandato e con la subscribe salvato
  public newList(formCreazione: NgForm) {

    const newList = {
      'id': this.lista.id,
      'todo': formCreazione.value.todo,
      'stato': formCreazione.value.stato,
      'datainizio': formCreazione.value.dataInizio,
      'scadenza': formCreazione.value.scadenza
    } as ListaTodo

    this.listService.post(newList).subscribe(result => {
      //per tornare in automatico alla pagina iniziale o mostrare un errore
      this.router.navigateByUrl('lista');
    }, error => console.log(error)
    )

  }

  ngOnInit(): void {
  }

}
