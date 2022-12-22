import { Component, Input } from "@angular/core";
import { AdComponent } from "./ad.model";

@Component({
    template: `
    <div>
        <h4>{{data.headline}}</h4>
        <p>{{data.body}}</p>
    </div>`
})
export class HeroJobComponent implements AdComponent {
    @Input() data: any;
}