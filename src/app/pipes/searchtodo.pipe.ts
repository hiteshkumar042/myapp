import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from '../model/todo.type';

@Pipe({
  name: 'searchtodo',
  standalone: true
})
export class SearchtodoPipe implements PipeTransform {

  transform(todos: ToDo[], searchVal: string): any {
     if (!searchVal) {
      return todos
     }
    let text = searchVal.toLowerCase();
    return todos.filter((todo: any) => {
      return todo.title.toLowerCase().includes(text)
    })
  }
}
