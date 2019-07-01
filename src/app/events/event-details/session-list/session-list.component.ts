import { ISession } from './../../shared/event.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {

  @Input() sessions: ISession[]
  @Input() filterBy: string
  filteredSessions: ISession[]

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.sessions){
      this.filterSessions(this.filterBy);
    }
  }

  filterSessions(filter){
    if(filter === 'all'){
      this.filteredSessions = this.sessions.slice(0);
    }
    else{
      this.filteredSessions = this.sessions.filter(session=> {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }

}
