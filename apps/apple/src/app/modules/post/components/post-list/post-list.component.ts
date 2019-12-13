import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Post } from '../../interfaces';

@Component({
  selector: 'nx-demo-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListComponent {

  /**
   * Holds posts.
   */
  @Input() posts: Post[];

  /**
   * Holds loading.
   */
  @Input() loading: boolean;

  /**
   * Track by post id.
   */
  public trackByPostId(_: number, post: Post): number {

    return post.id;

  }

}
