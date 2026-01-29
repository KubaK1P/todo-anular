import { Injectable } from '@angular/core';
import { TaskInterface } from './interfaces/taskinterface';

@Injectable({
  providedIn: 'root',
})
export class TodoManager {
  private todos: TaskInterface[] = [
  ];

  constructor() {
    this.fetchTodos();
  }

  fetchTodos() {
    this.todos.push(
      { id: 1, title: "zrobic pranie", done: true },
      { id: 2, title: "opcjonalnie zjesc kebaba", done: false })
  }
  getTodos() {
    return this.todos;
  }

  addTodo(addtitle: string) {
    const tmp: TaskInterface = { id: this.todos.length, title: addtitle, done: false };
    this.todos.push(tmp);
  }

}
