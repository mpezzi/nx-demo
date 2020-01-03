import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { Observable } from 'apollo-link';
import { pluck, shareReplay } from 'rxjs/operators';

import { Post } from '@nx-demo/interface';

import { query } from './post-list-container.component.query';

@Component({
  selector: 'nx-demo-post-list-container',
  templateUrl: './post-list-container.component.html',
  styleUrls: ['./post-list-container.component.scss'],
})
export class PostListContainerComponent implements OnInit {

  /**
   * Holds query.
   */
  public query: QueryRef<any>;

  /**
   * Holds result observable.
   */
  public result$: any;

  /**
   * Holds posts observable.
   */
  public posts$: Observable<Post[]>;

  /**
   * Holds loading observable.
   */
  public loading$: Observable<boolean>;

  /**
   * Constructor.
   */
  public constructor(
    public apollo: Apollo,
  ) { }

  /**
   * On Init.
   */
  public ngOnInit(): void {

    this.query    = this.apollo.watchQuery({ query });
    this.result$  = this.query.valueChanges.pipe(shareReplay(1));
    this.posts$   = this.result$.pipe(pluck('data', 'posts'));
    this.loading$ = this.result$.pipe(pluck('loading'));

  }

}
