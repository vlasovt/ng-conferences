import { ActivatedRoute } from '@angular/router';
import {Component, OnInit} from '@angular/core'
import { EventService } from './shared/event.service';
import { IEvent } from './shared/event.model';

@Component({
    template: `
                <div>
                    <h1>Upcoming Angular Events</h1>
                    <hr>
                    <div class="col-md-5" *ngFor="let event of events">
                        <event-thumbnail [event]="event"></event-thumbnail>
                    </div>
                </div>
              `
})

export class EventsListComponent implements OnInit{
   
    events:IEvent[]

    constructor(private eventService: EventService,
        private route: ActivatedRoute){
        
    }
    
    ngOnInit(){
        this.events = this.route.snapshot.data['events']
    }
}