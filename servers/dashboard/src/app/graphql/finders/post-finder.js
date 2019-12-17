import { client } from '../clients';

/**
 * Get posts.
 */
export const getPosts = async () => {

  return await client.get(`/posts`).then(r => r.data);

};

/**
 * Get post by id.
 */
export const getPostById = async (postId) => {

  return await client.get(`/posts/${postId}`).then(r => r.data);

};
