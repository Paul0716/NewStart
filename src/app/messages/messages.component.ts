import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy {

  public messages: string[] = [];

  private _msg$: Subscription;

  constructor(public messageService: MessageService) {
    this._msg$ = messageService
      .msg$
      .subscribe((msg: string) => this.messages.push(msg));
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this._msg$.unsubscribe();
  }



  /**
   * 清除 message
   *
   * @memberof MessagesComponent
   */
  clear() {
    this.messageService.clear();
  }

}
