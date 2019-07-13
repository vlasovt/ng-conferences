import { IEvent, ISession } from './../shared/event.model';
import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event:IEvent
  addMode: boolean
  filterBy:string = 'all'
  sortBy: string = 'votes'

  constructor(private eventService: EventService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params)=>{
      this.event = this.eventService.getEvent(+params['id']);
    });
    
  }

  addSession(){
    this.addMode = true;
  }

  saveNewSession(newSession: ISession){

    const maxId = Math.max.apply(null, this.event.sessions.map(s=> s.id));

    newSession.id = maxId + 1;

    this.event.sessions.push(newSession);

    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelNewSession(){
    this.addMode = false;
  }

}
