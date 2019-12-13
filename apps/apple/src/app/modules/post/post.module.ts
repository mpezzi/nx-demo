import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { components } from './components';
import { containers } from './containers';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ...components,
    ...containers,
  ],
  declarations: [
    ...components,
    ...containers,
  ],
})
export class PostModule { }
