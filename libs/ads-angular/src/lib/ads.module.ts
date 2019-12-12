import { NgModule } from '@angular/core';
import { AdsLayoutModule } from './modules/layout';

@NgModule({
  imports: [
    AdsLayoutModule,
  ],
  exports: [
    AdsLayoutModule,
  ],
})
export class AdsModule { }
