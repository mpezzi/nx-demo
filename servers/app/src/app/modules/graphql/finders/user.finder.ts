import { Inject, Injectable } from "@nestjs/common";

import { User } from '@nx-demo/interface';

@Injectable()
export class UserFinder {

  /**
   * Constructor.
   */
  public constructor(
    @Inject('JsonPlaceholderClient') private readonly jsonPlaceholderClient,
  ) { }

  /**
   * Get users.
   */
  public async getUsers(): Promise<User[]> {
    return await this.jsonPlaceholderClient.get(`/users`).then(r => r.data);
  }

  /**
   * Get user by id.
   */
  public async getUserById(userId: string): Promise<User> {
    return await this.jsonPlaceholderClient.get(`/users/${userId}`).then(r => r.data);
  }

}
