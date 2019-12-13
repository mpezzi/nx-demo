import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Post } from '../../interfaces';

@Component({
  selector: 'nx-demo-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {

  /**
   * Holds post.
   */
  @Input() post: Post;

}
