import { Args, Parent, Query, ResolveProperty, Resolver } from "@nestjs/graphql";
import { Todo, User } from '@nx-demo/interface';

import { TodoFinder, UserFinder } from '../finders';

@Resolver('Todo')
export class TodoResolver {

  /**
   * Constructor.
   */
  public constructor(
    private readonly todoFinder: TodoFinder,
    private readonly userFinder: UserFinder,
  ) { }

  /**
   * Get todos.
   */
  @Query('getTodos')
  public async getTodos(): Promise<Todo[]> {
    return await this.todoFinder.getTodos();
  }

  /**
   * Get todo by id.
   */
  @Query('getTodoById')
  public async getTodoById(@Args('todoId') todoId: string): Promise<Todo> {
    return await this.todoFinder.getTodoById(todoId);
  }

  /**
   * Get user by todo.
   */
  @ResolveProperty('user')
  public async getUserByTodo(@Parent() todo: Todo): Promise<User> {
    return await this.userFinder.getUserById(todo.userId);
  }

}
