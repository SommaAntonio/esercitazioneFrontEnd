import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from 'src/app/core/service/list.service';
import { ListaTodo } from 'src/app/shared/model/list-model.model';

@Component({
  selector: 'ese-list-update',
  templateUrl: './list-update.component.html',
  styleUrls: ['./list-update.component.css']
})
export class ListUpdateComponent implements OnInit {
  //ingect delle varie librerie e del service 
  constructor(private listService: ListService, private router: Router, private route: ActivatedRoute) { }
  //creo la lista nuova e vuota

  lista: ListaTodo = {} as ListaTodo
  id: number = 0;
  todo: string = '';
  stato: string = '';
  dataInizio: Date = new Date;
  scadenza: Date = new Date;
  //la riempio e salvo
  public modifica(update: NgForm): void {
    const ListaModificato = {
      'id': this.id,
      'todo': update.value.todo,
      'stato': update.value.stato,
      'datainizio': update.value.dataInizio,
      'scadenza': update.value.scadenza
    } as ListaTodo
    console.log(ListaModificato);

    this.listService.put(ListaModificato).subscribe(result => {
      this.router.navigateByUrl('lista');
    }, error => console.log(error)
    )
  }


  ngOnInit(): void {
    this.route.params.subscribe(
      result => {
        this.id = result['id']
      },
      error => console.log(error)

    )
    this.listService.getById(this.id).subscribe(
      result => {
        this.lista = result
      }, errore => console.log(errore)

    )
  }

}
