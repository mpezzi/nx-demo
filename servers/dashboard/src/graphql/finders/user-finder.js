import { client } from '../clients';

/**
 * Get users.
 */
export const getUsers = async () => {

  return await client.get(`/users`).then(r => r.data);

};

/**
 * Get user by id.
 */
export const getUserById = async (userId) => {

  return await client.get(`/users/${userId}`).then(r => r.data);

};
