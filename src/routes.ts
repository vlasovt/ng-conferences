import { EventRouteActivatorService } from './app/events/event-route-activator.service';
import { NotFoundComponent } from './app/errors/not-found/not-found.component';
import { CreateEventComponent } from './app/events/create-event/create-event.component';
import { Routes } from '@angular/router';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { EventsListComponent } from './app/events/events-list-component';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events', component: EventsListComponent},
    { path: 'events/:id', component: EventDetailsComponent , canActivate: [EventRouteActivatorService]},
    { path: '404', component: NotFoundComponent },
    { path: '', redirectTo: '/events' , pathMatch: 'full' }
]