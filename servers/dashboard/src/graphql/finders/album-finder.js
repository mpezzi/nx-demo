import { client } from '../clients';

/**
 * Get albums.
 */
export const getAlbums = async () => {

  return await client.get(`/albums`).then(r => r.data);

};

/**
 * Get albums by user id
 */
export const getAlbumsByUserId = async (userId) => {

  return await client.get(`/users/${userId}/albums`).then(r => r.data);

};

/**
 * Get album by id.
 */
export const getAlbumById = async (albumId) => {

  return await client.get(`/albums/${albumId}`).then(r => r.data);

};
