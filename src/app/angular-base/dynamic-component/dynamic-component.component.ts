import { Component, OnInit } from '@angular/core';
import { AdItem } from './ad.model';
import { AdService } from './ad.service';

@Component({
  selector: 'app-dynamic-component',
  template: `
  <div>
    <app-ad-banner [ads]="ads"></app-ad-banner>
  </div>
  `,
})
export class DynamicComponentComponent implements OnInit {

  ads: AdItem[] = [];
  constructor(private adService: AdService) { }

  ngOnInit(): void {
    this.ads = this.adService.getAds();
  }

}
