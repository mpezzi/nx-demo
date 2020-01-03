import { Inject, Injectable } from "@nestjs/common";

import { Album } from '@nx-demo/interface';

@Injectable()
export class AlbumFinder {

  /**
   * Constructor.
   */
  public constructor(
    @Inject('JsonPlaceholderClient') private readonly jsonPlaceholderClient,
  ) { }

  /**
   * Get albums.
   */
  public async getAlbums(): Promise<Album[]> {
    return await this.jsonPlaceholderClient.get(`/albums`).then(r => r.data);
  }

  /**
   * Get albums by user id.
   */
  public async getAlbumsByUserId(userId: string): Promise<Album[]> {
    return await this.jsonPlaceholderClient.get(`/users/${userId}/albums`).then(r => r.data);
  }

  /**
   * Get album by id.
   */
  public async getAlbumById(albumId: string): Promise<Album> {
    return await this.jsonPlaceholderClient.get(`/albums/${albumId}`).then(r => r.data);
  }

}
