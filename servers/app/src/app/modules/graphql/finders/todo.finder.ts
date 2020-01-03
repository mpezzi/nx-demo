import { Inject, Injectable } from "@nestjs/common";

import { Todo } from '@nx-demo/interface';

@Injectable()
export class TodoFinder {

  /**
   * Constructor.
   */
  public constructor(
    @Inject('JsonPlaceholderClient') private readonly jsonPlaceholderClient,
  ) { }

  /**
   * Get todos.
   */
  public async getTodos(): Promise<Todo[]> {
    return await this.jsonPlaceholderClient.get(`/todos`).then(r => r.data);
  }

  /**
   * Get todos by user id.
   */
  public async getTodosByUserId(userId: string): Promise<Todo[]> {
    return await this.jsonPlaceholderClient.get(`/users/${userId}/todos`).then(r => r.data);
  }

  /**
   * Get todo by id.
   */
  public async getTodoById(todoId: string): Promise<Todo> {
    return await this.jsonPlaceholderClient.get(`/todos/${todoId}`).then(r => r.data);
  }

}
