import { Component } from "@angular/core";
import { Location } from "@angular/common";
@Component({
    template: `
    <h1>New Event</h1>
    <hr>
    <div class = "col-md-6">
    <h3>[Create Event Form Will go here]</h3>
    <br/>
    <br/>
    <button class="btn btn-primary">Save</button>
    <button class="btn btn-default btn-space" (click)="cancel()">Cancel</button>
    </div>
    `, styles: [
        `.btn-space{
            margin-left:10px ; 
        }
        `
    ]
})
export class CreateEventComponent {
    constructor(private location: Location) {

    }
    cancel = () => {
        this.location.back()
    }
}