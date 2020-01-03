import { Injectable } from "@nestjs/common";
import { Post } from '@nx-demo/interface';

import { JsonPlaceholderClient } from '../clients';

@Injectable()
export class PostFinder {

  /**
   * Constructor.
   */
  public constructor(
    private readonly client: JsonPlaceholderClient,
  ) { }

  /**
   * Get posts.
   */
  public async getPosts(): Promise<Post[]> {

    return await this.client.get(`/posts`);

  }

  /**
   * Get post by id.
   */
  public async getPostById(postId: string): Promise<Post> {

    return await this.client.get(`/posts/${postId}`);

  }

}
