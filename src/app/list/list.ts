import { Component } from '@angular/core';
import { Task } from '../task/task';
import { TodoManager } from '../todo-manager';
import { AddTaskButton } from '../add-task-button/add-task-button';

@Component({
  selector: 'app-list',
  imports: [Task, AddTaskButton],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  constructor(public todoManager: TodoManager) {
  }
}
