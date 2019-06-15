import { ActivatedRoute } from '@angular/router';
import {Component, OnInit} from '@angular/core'
import { EventService } from './shared/event.service';
import { ToasterService } from '../common/toaster.service';
import { IEvent } from './shared/event.model';

@Component({
    template: `
                <div>
                    <h1>Upcoming Angular Events</h1>
                    <hr>
                    <div class="col-md-5" *ngFor="let event of events">
                        <event-thumbnail (click)="handleThumbnailClick(event.name)" #thumbnail [event]="event"></event-thumbnail>
                    </div>
                </div>
              `
})

export class EventsListComponent implements OnInit{
   
    events:IEvent[]

    constructor(private eventService: EventService, 
        private toastr: ToasterService,
        private route: ActivatedRoute){
        
    }
    
    ngOnInit(){
        this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(eventName){
        this.toastr.success(eventName)
    }

    // handleEventClicked(data){
    //     alert('this is ' + data);
    // }
}