import { Inject, Injectable } from "@nestjs/common";

import { Photo } from '@nx-demo/interface';

@Injectable()
export class PhotoFinder {

  /**
   * Constructor.
   */
  public constructor(
    @Inject('JsonPlaceholderClient') private readonly jsonPlaceholderClient,
  ) { }

  /**
   * Get photos.
   */
  public async getPhotos(): Promise<Photo[]> {
    return await this.jsonPlaceholderClient.get(`/photos`).then(r => r.data);
  }

  /**
   * Get photos by album id.
   */
  public async getPhotosByAlbumId(albumId: string): Promise<Photo[]> {
    return await this.jsonPlaceholderClient.get(`/albums/${albumId}/photos`).then(r => r.data);
  }

  /**
   * Get photo by id.
   */
  public async getPhotoById(photoId: string): Promise<Photo> {
    return await this.jsonPlaceholderClient.get(`/photos/${photoId}`).then(r => r.data);
  }

}
