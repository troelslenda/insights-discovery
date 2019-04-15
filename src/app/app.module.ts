import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { InsightsDiscoveryComponent } from './insights-discovery/insights-discovery.component';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    InsightsDiscoveryComponent
    ],
  imports: [
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [InsightsDiscoveryComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(InsightsDiscoveryComponent, { injector });
    customElements.define('insights-discovery', el);
  }

  ngDoBootstrap() {}

}
