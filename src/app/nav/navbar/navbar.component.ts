import { ISession } from './../../events/shared/event.model';
import { AuthService } from './../../user/auth.service';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/events';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchTerm: string = ""
  foundSessions: ISession[]

  constructor(public authService: AuthService, private eventService: EventService) { }

  ngOnInit() {
  }

  searchSessions(searchTerm: string){
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {this.foundSessions = sessions}
    );
    console.log(this.foundSessions);
  }

}
