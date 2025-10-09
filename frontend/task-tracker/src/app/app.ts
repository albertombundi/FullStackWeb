import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    RouterModule,
    RouterOutlet,
    Footer
],
 templateUrl: './app.html',
 styleUrls: ['./app.css']
})
export class App {
 
}