import { Component, Input } from '@angular/core';
import { TodoManager } from '../todo-manager';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [NgClass],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  constructor(private todoManager: TodoManager) { }
  @Input() id: string = "noIdForSomeReason";
  @Input() title: string = 'uNdEfInEd xd';
  @Input() done: boolean = false;

  toggleDone() {
    this.todoManager.toggleTodo(this.id);
  }
}
