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
  @Input() sortBy: string
  filteredSessions: ISession[]

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.sessions){
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'
        ? this.filteredSessions.sort(this.sortByNamesAsc)
        : this.filteredSessions.sort(this.sortByVotesDesc);
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

  sortByVotesDesc(s1: ISession, s2: ISession){
    return s2.voters.length - s1.voters.length;
  }

  sortByNamesAsc(s1: ISession, s2: ISession){
    if (s1.name > s2.name) return 1
    else if (s1.name === s2.name) return 0
    else return -1
  }

}
