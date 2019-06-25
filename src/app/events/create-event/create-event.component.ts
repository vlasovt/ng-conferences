import { EventService } from './../shared/event.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  idDirty:boolean = false
  newEvent

  constructor(private router:Router, private eventService: EventService) { }

  ngOnInit() {
  }

  click(){
    this.router.navigate(['/events'])
  }

  saveEvent(formValues){
    this.eventService.saveEvent(formValues);
    this.router.navigate(['/events'])
  }

}
