import { client } from '../clients';

/**
 * Get photos.
 */
export const getPhotos = async () => {

  return await client.get(`/photos`).then(r => r.data);

};

/**
 * Get photos by album id.
 */
export const getPhotosByAlbumId = async (albumId) => {

  return await client.get(`/albums/${albumId}/photos`).then(r => r.data);

};

/**
 * Get photo by id.
 */
export const getPhotoById = async (photoId) => {

  return await client.get(`/photos/${photoId}`).then(r => r.data);

};
