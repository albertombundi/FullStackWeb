import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ NgStyle ],
  templateUrl: './button.html',
  styleUrls: ['./button.css']
})
export class Button {
  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }

}
