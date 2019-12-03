import { Component } from '@angular/core';
import { dog } from '@nx-demo/dog';

@Component({
  selector: 'nx-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'orange';
  animals = [dog];
}
