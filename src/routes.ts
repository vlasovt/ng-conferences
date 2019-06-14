import { EventRouteActivatorService } from './app/events/event-route-activator.service';
import { NotFoundComponent } from './app/errors/not-found/not-found.component';
import { CreateEventComponent } from './app/events/create-event/create-event.component';
import { Routes } from '@angular/router';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { EventsListComponent } from './app/events/events-list-component';
import { EventListResolverService } from './app/events/event-list-resolver.service';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent , canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent, resolve:{events:EventListResolverService}},
    { path: 'events/:id', component: EventDetailsComponent , canActivate: [EventRouteActivatorService]},
    { path: '404', component: NotFoundComponent },
    { path: '', redirectTo: '/events' , pathMatch: 'full' }
]