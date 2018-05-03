import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {
  messages: string[] = [];

  msg$ = new Subject<string>();

  add(message: string) {
    // this.messages.push(message);
    this.msg$.next(message);
  }

  clear() {
    this.messages = [];
  }
}
