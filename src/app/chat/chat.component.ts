import {Component, OnInit} from '@angular/core';
import {ChatService} from './chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html'
})

export class ChatComponent implements OnInit {

  newMessage = '';
  chatMessage = '';
  toggled = false;

  constructor(private chatService: ChatService) {
  }

  ngOnInit(): void {
    this.subscribeChat();
  }

  subscribeChat() {
    this.chatService.subscribeChat().subscribe(message => {
      this.chatMessage += '\n' + message;
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

  toggle() {
    if (this.toggled) {
      this.toggled = false;
    } else {
      this.toggled = true;
    }
  }



}
