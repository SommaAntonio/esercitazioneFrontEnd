import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaTodo } from 'src/app/shared/model/list-model.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }
  public delete(id: number): Observable<number> {
    const url = environment.baseUrl + '/lista/' + id
    return this.http.delete<number>(url);
  }

  public getAll(): Observable<ListaTodo[]> {
    const url = environment.baseUrl + '/lista/listTodo'
    return this.http.get<ListaTodo[]>(url)
  }

  public getById(id: number): Observable<ListaTodo> {
    const url = environment.baseUrl + '/lista/' + id
    return this.http.get<ListaTodo>(url)
  }

  public post(lista: ListaTodo): Observable<ListaTodo> {
    const url = environment.baseUrl + '/lista/'
    return this.http.post<ListaTodo>(url, lista)
  }

  public put(lista: ListaTodo): Observable<ListaTodo> {
    const url = environment.baseUrl + '/lista/' + lista.id
    return this.http.put<ListaTodo>(url, lista)
  }

  public search(word: string): Observable<ListaTodo[]> {
    const url = environment.baseUrl + '/lista/search?word=' + word
    return this.http.get<ListaTodo[]>(url)
  }
}
