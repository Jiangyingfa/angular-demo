import { Type } from "@angular/core";

export interface AdComponent {
    data: any;
}

export class AdItem {
    constructor(public component: Type<any>, public data: any) { }
}