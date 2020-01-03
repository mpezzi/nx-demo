import { Injectable } from "@nestjs/common";
import { User } from '@nx-demo/interface';

import { JsonPlaceholderClient } from '../clients';

@Injectable()
export class UserFinder {

  /**
   * Constructor.
   */
  public constructor(
    private readonly client: JsonPlaceholderClient,
  ) { }

  /**
   * Get users.
   */
  public async getUsers(): Promise<User[]> {

    return await this.client.get(`/users`);

  }

  /**
   * Get user by id.
   */
  public async getUserById(userId: string): Promise<User> {

    return await this.client.get(`/users/${userId}`);

  }

}
