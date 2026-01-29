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
      { id: crypto.randomUUID(), title: "zrobic pranie", done: true },
      { id: crypto.randomUUID(), title: "opcjonalnie zjesc kebaba", done: false })
  }
  getTodos() {
    return this.todos;
  }

  addTodo(addTitle: string) {
    const tmp: TaskInterface = { id: crypto.randomUUID(), title: addTitle, done: false };
    this.todos.push(tmp);
  }

  toggleTodo(toggleId: string) {
    const todo = this.todos.find((todo) => todo.id === toggleId);
    if (todo) {
      todo.done = !todo.done;
    }
  }

}
