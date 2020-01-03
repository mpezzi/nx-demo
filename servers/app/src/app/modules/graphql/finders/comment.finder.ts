import { Inject, Injectable } from "@nestjs/common";

import { Comment } from '@nx-demo/interface';

@Injectable()
export class CommentFinder {

  /**
   * Constructor.
   */
  public constructor(
    @Inject('JsonPlaceholderClient') private readonly jsonPlaceholderClient,
  ) { }

  /**
   * Get comments.
   */
  public async getComments(): Promise<Comment[]> {
    return await this.jsonPlaceholderClient.get(`/comments`).then(r => r.data);
  }

  /**
   * Get comments by post id.
   */
  public async getCommentsByPostId(postId: string): Promise<Comment[]> {
    return await this.jsonPlaceholderClient.get(`/posts/${postId}/comments`).then(r => r.data);
  }

  /**
   * Get comment by id.
   */
  public async getCommentById(commentId: string): Promise<Comment> {
    return await this.jsonPlaceholderClient.get(`/comments/${commentId}`).then(r => r.data);
  }

}
