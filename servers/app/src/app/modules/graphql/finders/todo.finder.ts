import { Injectable } from "@nestjs/common";
import { Todo } from '@nx-demo/interface';

import { JsonPlaceholderClient } from '../clients';

@Injectable()
export class TodoFinder {

  /**
   * Constructor.
   */
  public constructor(
    private readonly client: JsonPlaceholderClient,
  ) { }

  /**
   * Get todos.
   */
  public async getTodos(): Promise<Todo[]> {

    return await this.client.get(`/todos`);

  }

  /**
   * Get todos by user id.
   */
  public async getTodosByUserId(userId: string): Promise<Todo[]> {

    return await this.client.get(`/users/${userId}/todos`);

  }

  /**
   * Get todo by id.
   */
  public async getTodoById(todoId: string): Promise<Todo> {

    return await this.client.get(`/todos/${todoId}`);

  }

}
