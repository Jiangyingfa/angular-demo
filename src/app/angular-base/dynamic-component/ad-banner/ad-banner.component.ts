import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdDirective } from '../ad.directive';
import { AdComponent, AdItem } from '../ad.model';

@Component({
  selector: 'app-ad-banner',
  template: `
  <div>
    <h3>Adviertisements</h3>
    <ng-template appAd></ng-template>
  </div>
  `,
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[] = [];

  @ViewChild(AdDirective, { static: true }) appAd!: AdDirective;
  currencIndex = -1;
  intervalId!: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  loadComponent() {
    this.currencIndex = (this.currencIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currencIndex];

    const viewContainerRef = this.appAd.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component);
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    this.intervalId = window.setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
