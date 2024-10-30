
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from '../message/message.component';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, MessageComponent, InputComponent],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: { sender: string; text: string }[] = [
    { sender: 'Atendente', text: 'bla bla bla bla bla bla' },
    { sender: 'Você', text: 'bla bla bla bla bla bla' },
    { sender: 'Atendente', text: 'bla bla bla bla bla bla' },
    { sender: 'Você', text: 'bla bla bla bla bla bla' }
  ];

  addMessage(text: string) {
    this.messages.push({ sender: 'Você', text });
  }
}
