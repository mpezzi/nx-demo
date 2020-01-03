import { Injectable } from "@nestjs/common";
import { Album } from '@nx-demo/interface';

import { JsonPlaceholderClient } from '../clients';

@Injectable()
export class AlbumFinder {

  /**
   * Constructor.
   */
  public constructor(
    private readonly client: JsonPlaceholderClient,
  ) { }

  /**
   * Get albums.
   */
  public async getAlbums(): Promise<Album[]> {

    return await this.client.get(`/albums`);

  }

  /**
   * Get albums by user id.
   */
  public async getAlbumsByUserId(userId: string): Promise<Album[]> {

    return await this.client.get(`/users/${userId}/albums`);

  }

  /**
   * Get album by id.
   */
  public async getAlbumById(albumId: string): Promise<Album> {

    return await this.client.get(`/albums/${albumId}`);

  }

}
