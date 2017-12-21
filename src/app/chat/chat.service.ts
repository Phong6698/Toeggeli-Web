import {Injectable} from '@angular/core';
import {Message} from '@stomp/stompjs';
import {StompService} from '@stomp/ng2-stompjs';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatService {

  public chatSubscribed: boolean;

  constructor(private stompService: StompService) {
    this.chatSubscribed = false;
  }

  public subscribeChat(): Observable<string> {
    if (this.chatSubscribed) {
      return;
    }

    return this.stompService.subscribe('/chat').map((message: Message) => {
      this.chatSubscribed = true;
      return message.body;
    });
  }

  public sendMessage(message: string) {
    this.stompService.publish('/app/send/message', message);
  }
}
