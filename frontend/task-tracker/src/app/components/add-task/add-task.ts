import { Component, Output, EventEmitter } from '@angular/core';
import { Ui } from '../../services/ui';
import { Subscription } from 'rxjs';
import {FormsModule} from '@angular/forms';
import { Task } from '../../Task';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-task.html',
  styleUrls: ['./add-task.css']
})
export class AddTask {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private ui: Ui) {
    this.subscription = this.ui
      .onToggle()
      .subscribe((value) => (this.showAddTask = value)); 
  }

  onSubmit() {
    if(!this.text) {
      alert('Please add a task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
