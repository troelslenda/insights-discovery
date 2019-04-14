import { Component, OnInit, Input} from "@angular/core";
import {baseLayer} from "./baseLayers";

@Component({
  selector: "app-insights-discovery",
  templateUrl: "./insights-discovery.component.html",
  styleUrls: ["./insights-discovery.component.scss"]
})
export class InsightsDiscoveryComponent implements OnInit {
  @Input() insightsDiscoveryCode: number;
  stack: any[];
  totalheight = 0;

  constructor() {  }

  orderOfColors(code: number): string[] {
    return baseLayer[this.baseNumber(code)];
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
  }

  get ring(): number {
    return this.locateRing(this.insightsDiscoveryCode);
  }

  ngOnInit() {
    this.stack = this.orderOfColors(this.insightsDiscoveryCode);
    this.stack.splice(this.ring, 0, 'black');
    this.stack = this.stack.map(color => {
      const height = color === 'black' ? 10 : 30;
      const y = this.totalheight;
      this.totalheight += height;
      return {y, height, color};
    });
  }
}
