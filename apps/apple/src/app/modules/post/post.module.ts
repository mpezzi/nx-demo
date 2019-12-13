import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
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
