import { Component } from '@angular/core';
import { dog } from '@nx-demo/dog';
import { cat } from '@nx-demo/cat';

@Component({
  selector: 'nx-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apple';
  animals = [dog, cat];
}
