import { ISession } from './../../shared/event.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  @Input() sessions: ISession[]

  constructor() { }

  ngOnInit() {
  }

}
