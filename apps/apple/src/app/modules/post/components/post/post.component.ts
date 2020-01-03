import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Post } from '@nx-demo/interface';

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
