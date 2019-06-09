import { Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail-component.html',
    styles: [`
        .pad-left { margin-left:10px; }
        .well div { color: #bbb }
        .green {color: limegreen !important}
        .bold {font-weight: bold}
    `]
})

export class EventThumbnailComponent {
    @Input() event:any
    //@Output() eventClick = new EventEmitter()

    // handleClickMe() {
    //     this.eventClick.emit(this.event.name);
    // }

    getStartTimeClass() {
        const iaEarlyStart = this.event && this.event.time === '8:00 am'
        
        //return {green: iaEarlyStart, bold: iaEarlyStart}

        if (iaEarlyStart){
            return ['green', 'bold']
        }

        return [];
    }
}