import { Component } from '@angular/core';
import { Task } from '../task/task';
import { TodoManager } from '../todo-manager';
import { TaskInterface } from '../interfaces/taskinterface';

@Component({
  selector: 'app-list',
  imports: [Task],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  public todos: TaskInterface[] = [];
  constructor(private todoManager: TodoManager) {
    this.todos = this.todoManager.getTodos();
  }
}
