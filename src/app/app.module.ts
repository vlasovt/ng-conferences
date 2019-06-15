import {
  EventRouteActivatorService,
  EventService,
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolverService
}from './events/index'

import { appRoutes } from './../routes';
import { ToasterService } from './common/toaster.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, 
              ToasterService, 
              EventRouteActivatorService,
              {
                provide: 'canDeactivateCreateEvent',
                useValue: checkDirtyState
              },
              EventListResolverService
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.idDirty)
  {
    return window.confirm('Are you sure you want to leave the screen without saving the event?')
  }

  return true;
}