import { Component } from '@angular/core';
import { cat } from '@nx-demo/cat';
import { dog } from '@nx-demo/dog';

@Component({
  selector: 'nx-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apple';
  animals = [dog, cat];
}
