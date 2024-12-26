import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { ToDo } from '../model/todo.type';
import { HighlighttaskDirective } from '../directives/highlighttask.directive';
import { FormsModule } from '@angular/forms';
import { SearchtodoPipe } from '../pipes/searchtodo.pipe';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [HighlighttaskDirective,FormsModule,SearchtodoPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<ToDo>>([]);
  searchTerm = signal('')
  ngOnInit(): void {
  this.todoService.getTodoAPI().subscribe(data=>{
   this.todoItems.set(data)
  })
  }

}
