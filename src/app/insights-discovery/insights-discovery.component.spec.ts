import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsDiscoveryComponent } from './insights-discovery.component';
import { TouchSequence } from 'selenium-webdriver';

describe('InsightsDiscoveryComponent', () => {
  let component: InsightsDiscoveryComponent;
  let fixture: ComponentFixture<InsightsDiscoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightsDiscoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should evaluate ring correctly', () => {
    expect(component.locateRing(1)).toBe(1);
    expect(component.locateRing(27)).toBe(2);
    expect(component.locateRing(46)).toBe(3);
    expect(component.locateRing(12)).toBe(1);
    expect(component.locateRing(148)).toBe(3);
    expect(component.locateRing(101)).toBe(1);
    expect(component.locateRing(124)).toBe(2);
    expect(component.locateRing(41)).toBe(3);
  });

  it('check order of colors', () => {
    expect(component.orderOfColors(1)).toEqual(['red', 'blue', 'green', 'yellow']);
    expect(component.orderOfColors(27)).toEqual(['yellow', 'green', 'red', 'blue']);
    expect(component.orderOfColors(46)).toEqual(['yellow', 'red', 'green', 'blue']);
    expect(component.orderOfColors(12)).toEqual(['green', 'blue', 'red', 'yellow']);
    expect(component.orderOfColors(148)).toEqual(['yellow', 'blue', 'green', 'red']);
    expect(component.orderOfColors(101)).toEqual(['red', 'green', 'blue', 'yellow']);
    expect(component.orderOfColors(124)).toEqual(['red', 'green', 'yellow', 'blue']);
    expect(component.orderOfColors(41)).toEqual(['red', 'blue', 'green', 'yellow']);
  });
});
