import { Args, Query, Resolver } from '@nestjs/graphql';

import { UserFinder } from '../finders';

@Resolver('User')
export class UserResolver {

  /**
   * Constructor.
   */
  public constructor(
    private readonly userFinder: UserFinder,
  ) { }

  /**
   * Get users.
   */
  @Query('getUsers')
  public async getUsers() {
    return await this.userFinder.getUsers();
  }

  /**
   * Get user by id.
   */
  @Query('getUserById')
  public async getUserById(@Args('postId') postId: string) {
    return await this.userFinder.getUserById(postId);
  }

}
