import { EventService } from './shared/event.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService  implements Resolve<any>{

  constructor(private eventService:EventService) {

   }


  resolve(route:ActivatedRouteSnapshot){
    return this.eventService.getEvent(route.params['id'])
  }

  
}
