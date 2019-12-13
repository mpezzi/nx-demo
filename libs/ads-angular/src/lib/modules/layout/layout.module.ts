import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { AdsLayoutAsideComponent } from './components/layout-aside/layout-aside.component';
import { AdsLayoutContentComponent } from './components/layout-content/layout-content.component';
import { AdsLayoutComponent } from './components/layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    AdsLayoutComponent,
    AdsLayoutAsideComponent,
    AdsLayoutContentComponent,
  ],
  declarations: [
    AdsLayoutComponent,
    AdsLayoutAsideComponent,
    AdsLayoutContentComponent,
  ],
})
export class AdsLayoutModule { }
