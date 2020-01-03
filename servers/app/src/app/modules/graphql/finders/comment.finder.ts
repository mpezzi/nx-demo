import { Injectable } from "@nestjs/common";
import { Comment } from '@nx-demo/interface';

import { JsonPlaceholderClient } from '../clients';

@Injectable()
export class CommentFinder {

  /**
   * Constructor.
   */
  public constructor(
    private readonly client: JsonPlaceholderClient,
  ) { }

  /**
   * Get comments.
   */
  public async getComments(): Promise<Comment[]> {

    return await this.client.get(`/comments`);

  }

  /**
   * Get comments by post id.
   */
  public async getCommentsByPostId(postId: string): Promise<Comment[]> {

    return await this.client.get(`/posts/${postId}/comments`);

  }

  /**
   * Get comment by id.
   */
  public async getCommentById(commentId: string): Promise<Comment> {

    return await this.client.get(`/comments/${commentId}`);

  }

}
