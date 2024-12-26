import { inject, Injectable } from '@angular/core';
import { ToDo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient)
  getTodoAPI(){
    return this.http.get<Array<ToDo>>('https://jsonplaceholder.typicode.com/todos/')
  }
}
