import { client } from '../clients';

/**
 * Get todos.
 */
export const getTodos = async () => {

  return await client.get(`/todos`).then(r => r.data);

};

/**
 * Get todos by user id.
 */
export const getTodosByUserId = async (userId) => {

  return await client.get(`/users/${userId}/todos`).then(r => r.data);

};

/**
 * Get todo by id.
 */
export const getTodoById = async (todoId) => {

  return await client.get(`/todos/${todoId}`).then(r => r.data);

};
