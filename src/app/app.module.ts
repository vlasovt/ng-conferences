import { appRoutes } from './../routes';
import { ToasterService } from './common/toaster.service';
import { EventService } from './events/shared/event.service';
import { EventsListComponent } from './events/events-list-component';
import { EventThumbnailComponent } from './events/event-thumbnail-component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { from } from 'rxjs';
import { CreateEventComponent } from './events/create-event/create-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
