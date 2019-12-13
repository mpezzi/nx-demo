import { client } from '../clients';

/**
 * Get comments.
 */
export const getComments = async () => {

  return await client.get(`/comments`).then(r => r.data);

};

/**
 * Get comments by post id.
 */
export const getCommentsByPostId = async (postId) => {

  return await client.get(`/posts/${postId}/comments`).then(r => r.data);

};

/**
 * Get comment by id.
 */
export const getCommentById = async (commentId) => {

  return await client.get(`/comments/${commentId}`).then(r => r.data);

};
