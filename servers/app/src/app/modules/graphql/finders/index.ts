import { AlbumFinder } from './album.finder';
import { CommentFinder } from './comment.finder';
import { PhotoFinder } from './photo.finder';
import { PostFinder } from './post.finder';
import { TodoFinder } from './todo.finder';
import { UserFinder } from './user.finder';

export const finders: any[] = [
  AlbumFinder,
  CommentFinder,
  PhotoFinder,
  PostFinder,
  TodoFinder,
  UserFinder,
];

export * from './album.finder';
export * from './comment.finder';
export * from './photo.finder';
export * from './post.finder';
export * from './todo.finder';
export * from './user.finder';
