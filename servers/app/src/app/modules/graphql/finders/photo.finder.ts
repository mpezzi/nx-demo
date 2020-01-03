import { Injectable } from "@nestjs/common";
import { Photo } from '@nx-demo/interface';

import { JsonPlaceholderClient } from '../clients';

@Injectable()
export class PhotoFinder {

  /**
   * Constructor.
   */
  public constructor(
    private readonly client: JsonPlaceholderClient,
  ) { }

  /**
   * Get photos.
   */
  public async getPhotos(): Promise<Photo[]> {

    return await this.client.get(`/photos`);

  }

  /**
   * Get photos by album id.
   */
  public async getPhotosByAlbumId(albumId: string): Promise<Photo[]> {

    return await this.client.get(`/albums/${albumId}/photos`);

  }

  /**
   * Get photo by id.
   */
  public async getPhotoById(photoId: string): Promise<Photo> {

    return await this.client.get(`/photos/${photoId}`);

  }

}
