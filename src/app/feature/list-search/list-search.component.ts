import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ListService } from 'src/app/core/service/list.service';
import { ListaTodo } from 'src/app/shared/model/list-model.model';

@Component({
  selector: 'ese-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.css']
})
export class ListSearchComponent implements OnInit {

  constructor(private listService: ListService, private router: Router) { }
  /*inizializzo le varie variabili e inizialzzo a vuote per poi riempirle con la funzione di search*/
  word: string = '';
  listofTodoSearch: ListaTodo[] = [];
  loding: boolean = true;

  public search(searchForm: NgForm) {
    const word: string = searchForm.value.word
    //const word: string = 'testo'
    console.log(word);

    this.listService.search(word).subscribe(
      result => {
        this.listofTodoSearch = result
        this.loding = false
        console.log(this.listofTodoSearch);

      }, error => console.log(error)
    )
    /*la funzione per tornare indietro alla pagina inziale*/
  }
  public undo() {
    this.router.navigateByUrl('lista')
  }

  ngOnInit(): void {
  }

}
