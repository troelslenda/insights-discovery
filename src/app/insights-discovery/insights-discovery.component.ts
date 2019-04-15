import { Component, OnInit, Input, OnChanges} from "@angular/core";
import {baseLayer} from "./baseLayers";

@Component({
  selector: "app-insights-discovery",
  templateUrl: "./insights-discovery.component.html",
  styleUrls: ["./insights-discovery.component.scss"]
})
export class InsightsDiscoveryComponent implements OnChanges {
  @Input() insightsDiscoveryCode: number;
  stack: any[];
  totalheight = 0;
  error;

  constructor() {  }

  orderOfColors(code: number): string[] {
    return Object.values(baseLayer[this.baseNumber(code)]);
  }

  private baseNumber(code: number): number {
    while (code > 0) {
      if (Object.keys(baseLayer).includes(String(code))) {
        return code;
      }
      code -= 20;
    }
  }

  locateRing(code: number): number {
    if (code > 100) {
      code -= 100;
    }
    if (code > 0 && code < 20) {
      return 1;
    }
    if (code > 20 && code < 40) {
      return 2;
    }
    if (code > 40 && code < 60) {
      return 3;
    }
    throw new Error();
  }

  get ring(): number {
    return this.locateRing(this.insightsDiscoveryCode);
  }

  ngOnChanges() {
    this.error = null;
    this.totalheight = 0;
    try {
      this.stack = this.orderOfColors(this.insightsDiscoveryCode);
      if (this.stack) {
        this.stack.splice(this.ring, 0, 'black');
        this.stack = this.stack.map(color => {
          const height = color === 'black' ? 10 : 30;
          const y = this.totalheight;
          this.totalheight += height;
          return {y, height, color};
        });
      }
    } catch (e) {
      this.error = 'Not an insights code';
    }
  }
}
