import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public count = 0;

  constructor(
    private _msgSvc: MessageService
  ) {
    _msgSvc.msg$.subscribe( (msg: string) => {
      this.count++;
    });
  }

  ngOnInit() {
  }

}
