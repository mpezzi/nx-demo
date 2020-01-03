import { Args, Parent, Query, ResolveProperty, Resolver } from "@nestjs/graphql";
import { Album, Photo } from '@nx-demo/interface';

import { AlbumFinder, PhotoFinder } from '../finders';

@Resolver('Photo')
export class PhotoResolver {

  /**
   * Constructor.
   */
  public constructor(
    private readonly albumFinder: AlbumFinder,
    private readonly photoFinder: PhotoFinder,
  ) { }

  /**
   * Get photos.
   */
  @Query('getPhotos')
  public async getPhotos(): Promise<Photo[]> {
    return await this.photoFinder.getPhotos();
  }

  /**
   * Get photo by id.
   */
  @Query('getPhotoById')
  public async getPhotoById(@Args('photoId') photoId: string): Promise<Photo> {
    return await this.photoFinder.getPhotoById(photoId);
  }

  /**
   * Get album by photo.
   */
  @ResolveProperty('album')
  public async getAlbumByPhoto(@Parent() photo: Photo): Promise<Album> {
    return await this.albumFinder.getAlbumById(photo.albumId);
  }

}
