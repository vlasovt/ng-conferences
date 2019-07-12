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
import { TOASTR_TOKEN, 
  JQ_TOKEN, 
  Toastr, 
  CollapsableWellComponent, 
  SimpleModalComponent,
  ModalTriggerDirective
} 
from './common/index'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

let toastr = window['toaster']
let jQuery = window['$']

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
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
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
              {
                provide: JQ_TOKEN,
                useValue: jQuery
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