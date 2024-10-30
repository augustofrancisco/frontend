import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  newMessageText: string = '';

  @Output() newMessage = new EventEmitter<string>();

  sendMessage() {
    if (this.newMessageText.trim()) {
      this.newMessage.emit(this.newMessageText);
      this.newMessageText = '';
    }
  }
}