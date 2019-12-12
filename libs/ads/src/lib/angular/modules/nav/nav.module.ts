import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AdsNavComponent } from './nav.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    AdsNavComponent,
  ],
  declarations: [
    AdsNavComponent,
  ],
})
export class AdsNavModule { }
