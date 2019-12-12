import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AdsNavModule, AdsLayoutModule } from '@nx-demo/ads/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    AdsLayoutModule,
    AdsNavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
