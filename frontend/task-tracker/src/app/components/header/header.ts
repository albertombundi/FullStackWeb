import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';
import { Ui } from '../../services/ui';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule, RouterModule, Button],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private ui: Ui, private router:Router) {
    this.subscription = this.ui
    .onToggle()
    .subscribe(value => this.showAddTask = value);
  }

  toggleAddTask() {
    this.ui.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}
