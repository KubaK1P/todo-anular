import { Component } from '@angular/core';
import { TodoManager } from '../todo-manager';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task-button',
  imports: [FormsModule],
  templateUrl: './add-task-button.html',
  styleUrl: './add-task-button.css',
})
export class AddTaskButton {
  tmpTitle = ""; // FormsModule NgModel
  constructor(private todoManager: TodoManager) {

  }
  handleAddButton() {
    this.todoManager.addTodo(this.tmpTitle);
    this.tmpTitle = "";
  }
}
