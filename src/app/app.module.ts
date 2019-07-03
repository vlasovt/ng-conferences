import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';
import {
  EventRouteActivatorService,
  EventService,
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolverService,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
}from './events/index'

import { appRoutes } from './../routes';
import { TOASTR_TOKEN, Toastr } from './common/toaster.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { CollapsableWellComponent } from './common/collapsable-well/collapsable-well.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

declare let toastr: Toastr

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotFoundComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsableWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, 
              {
                provide: TOASTR_TOKEN,
                useValue: toastr
              }, 
              EventRouteActivatorService,
              {
                provide: 'canDeactivateCreateEvent',
                useValue: checkDirtyState
              },
              EventListResolverService,
              AuthService
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