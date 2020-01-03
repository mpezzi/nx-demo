import { Args, Parent, Query, ResolveProperty, Resolver } from "@nestjs/graphql";
import { Comment, Post } from '@nx-demo/interface';

import { CommentFinder, PostFinder, UserFinder } from '../finders';

@Resolver('Comment')
export class CommentResolver {

  /**
   * Constructor.
   */
  public constructor(
    private readonly commentFinder: CommentFinder,
    private readonly postFinder: PostFinder,
    private readonly userFinder: UserFinder,
  ) { }

  /**
   * Get comments.
   */
  @Query('getComments')
  public async getComments(): Promise<Comment[]> {
    return await this.commentFinder.getComments();
  }

  /**
   * Get comment by id.
   */
  @Query('getCommentById')
  public async getCommentById(@Args('commentId') commentId: string): Promise<Comment> {
    return await this.commentFinder.getCommentById(commentId);
  }

  /**
   * Get post by comment.
   */
  @ResolveProperty('post')
  public async getPostByComment(@Parent() comment: Comment): Promise<Post> {
    return await this.postFinder.getPostById(comment.postId);
  }

}
