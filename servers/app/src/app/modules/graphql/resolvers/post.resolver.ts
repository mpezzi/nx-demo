import { Args, Parent, Query, ResolveProperty, Resolver } from "@nestjs/graphql";
import { Post, User } from '@nx-demo/interface';

import { PostFinder, UserFinder } from '../finders';

@Resolver('Post')
export class PostResolver {

  /**
   * Constructor.
   */
  public constructor(
    private readonly postFinder: PostFinder,
    private readonly userFinder: UserFinder,
  ) { }

  /**
   * Get posts.
   */
  @Query('getPosts')
  public async getPosts(): Promise<Post[]> {
    return await this.postFinder.getPosts();
  }

  /**
   * Get post by id.
   */
  @Query('getPostById')
  public async getPostById(@Args('postId') postId: string): Promise<Post> {
    return await this.postFinder.getPostById(postId);
  }

  /**
   * Get user by post.
   */
  @ResolveProperty('user')
  public async getUserByPost(@Parent() post): Promise<User> {
    return await this.userFinder.getUserById(post.userId);
  }

}
