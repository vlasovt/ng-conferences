import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  idDirty:boolean = false

  constructor(private router:Router) { }

  ngOnInit() {
  }

  click(){
    this.router.navigate(['/events'])
  }

}
