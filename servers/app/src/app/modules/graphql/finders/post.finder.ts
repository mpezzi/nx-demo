import { Inject, Injectable } from "@nestjs/common";

import { Post } from '@nx-demo/interface';

@Injectable()
export class PostFinder {

  /**
   * Constructor.
   */
  public constructor(
    @Inject('JsonPlaceholderClient') private readonly jsonPlaceholderClient,
  ) { }

  /**
   * Get posts.
   */
  public async getPosts(): Promise<Post[]> {
    return await this.jsonPlaceholderClient.get(`/posts`).then(r => r.data);
  }

  /**
   * Get post by id.
   */
  public async getPostById(postId: string): Promise<Post> {
    return await this.jsonPlaceholderClient.get(`/posts/${postId}`).then(r => r.data);
  }

}
