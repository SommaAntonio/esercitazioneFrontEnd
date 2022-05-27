import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ListService } from 'src/app/core/service/list.service';
import { ListaTodo } from 'src/app/shared/model/list-model.model';

@Component({
  selector: 'ese-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {
  //inizializzazione della lista di array ListaToDo e il loding che attiva o disattiva la tabella
  listofTodo: ListaTodo[] = [];
  loding: boolean = true;
  //injection del service e della libreria router
  constructor(private listService: ListService, private router: Router) { }
  elimina(id: number): void {
    this.listService.delete(id).subscribe(result => {
      id = result
      //questa funziona serve per aggiornare la lista
      this.listofTodo = this.listofTodo.filter(l => l.id != id)
      //serve per ricaricare automaticamente la pagina
      window.location.reload();
    }, error => console.log(error)
    )
  }
  //la scelta serve per mandare alla pagina di modifica l'id della lista selezionata
  scelta(id: number): void {
    this.router.navigateByUrl('lista/modifica/' + id);
  }


  toCreate(): void {
    this.router.navigateByUrl('lista/creazione/');
  }

  query() {
    this.router.navigateByUrl('lista/search/');
  }

  ngOnInit(): void {
    this.listService.getAll().subscribe(
      result => {
        this.listofTodo = result
        this.loding = false
        console.log(this.listofTodo);

      }, error => console.log(error)
    )
  }

}
