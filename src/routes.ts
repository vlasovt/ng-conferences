
import {
    EventRouteActivatorService,
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolverService,
    CreateSessionComponent
} from './app/events/index'

import { NotFoundComponent } from './app/errors/not-found/not-found.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent , canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent, resolve:{events:EventListResolverService}},
    { path: 'events/:id', component: EventDetailsComponent , canActivate: [EventRouteActivatorService]},
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: NotFoundComponent },
    { path: '', redirectTo: '/events' , pathMatch: 'full' },
    { path: 'user', loadChildren: './app/user/user.module#UserModule' }
]