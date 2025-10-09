import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task-service';
import { Task } from '../../Task';
import { TaskItem } from '../task-item/task-item';
import { AddTask } from "../add-task/add-task";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItem, AddTask],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']
})
export class Tasks implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
     this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    this.taskService
     .deleteTask(task)
     .subscribe(
      () => { this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();  
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
