import { Injectable } from "@angular/core";
import { AdItem } from "./ad.model";
import { HeroJobComponent } from "./hreo-job.component";
import { HeroProfileComponent } from "./hreo-profile.component";

@Injectable({
    providedIn: 'root'
})
export class AdService {

    getAds() {
        return [
            new AdItem(HeroProfileComponent, { name: 'Tome', bio: 'Breave as they come' }),
            new AdItem(HeroProfileComponent, { name: 'Mary', bio: 'Smart as they come' }),
            new AdItem(
                HeroJobComponent,
                {
                    headline: 'Hiring for several positions',
                    body: 'Submit your resume today!',
                }),
            new AdItem(
                HeroJobComponent,
                {
                    headline: 'Openings in all departments',
                    body: 'Apply today',
                }),
        ]
    }
}