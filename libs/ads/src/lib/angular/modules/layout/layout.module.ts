import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AdsLayoutComponent } from './components/layout/layout.component';
import { AdsLayoutAsideComponent } from './components/layout-aside/layout-aside.component';
import { AdsLayoutContentComponent } from './components/layout-content/layout-content.component';

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
