import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "event-thumbnail",
    templateUrl: "./event-thumbnail.component.html",
    styles: [
        `.green{
            color:green;
        }
        .bold{
            font-weight:bold
        }
        `
    ]

})
export class EventComponent {
    @Input() event: any
    getStartTime() {
        if (this.event && this.event.time === '8:00 am') {
            return ["green", "bold"]
        }
        return []
    }

}