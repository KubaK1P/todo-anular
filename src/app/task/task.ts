import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  constructor() {

  }
  @Input() id: number = 0;
  @Input() title: string = 'tytuł taska';
  @Input() done: boolean = false;
}
