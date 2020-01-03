import { Args, Parent, Query, ResolveProperty, Resolver } from "@nestjs/graphql";
import { Album, Photo, User } from '@nx-demo/interface';

import { AlbumFinder, PhotoFinder, UserFinder } from '../finders';

@Resolver('Album')
export class AlbumResolver {

  /**
   * Constructor.
   */
  public constructor(
    private readonly albumFinder: AlbumFinder,
    private readonly photoFinder: PhotoFinder,
    private readonly userFinder: UserFinder,
  ) { }

  /**
   * Get albums.
   */
  @Query('getAlbums')
  public async getAlbums(): Promise<Album[]> {
    return await this.albumFinder.getAlbums();
  }

  /**
   * Get album by id.
   */
  @Query('getAlbumById')
  public async getAlbumById(@Args('albumId') albumId: string): Promise<Album> {
    return await this.albumFinder.getAlbumById(albumId);
  }

  /**
   * Get photos by album.
   */
  @ResolveProperty('photos')
  public async getPhotosByAlbum(@Parent() album: Album): Promise<Photo[]> {
    return await this.photoFinder.getPhotosByAlbumId(album.id);
  }

  /**
   * Get user by album.
   */
  @ResolveProperty('user')
  public async getUserByAlbum(@Parent() album: Album): Promise<User> {
    return await this.userFinder.getUserById(album.userId);
  }

}
