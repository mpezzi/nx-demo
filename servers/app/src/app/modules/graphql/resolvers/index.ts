import { AlbumResolver } from './album.resolver';
import { CommentResolver } from './comment.resolver';
import { PhotoResolver } from './photo.resolver';
import { PostResolver } from './post.resolver';
import { TodoResolver } from './todo.resolver';
import { UserResolver } from './user.resolver';

export const resolvers: any[] = [
  AlbumResolver,
  CommentResolver,
  PhotoResolver,
  PostResolver,
  TodoResolver,
  UserResolver,
];

export * from './album.resolver';
export * from './comment.resolver';
export * from './photo.resolver';
export * from './post.resolver';
export * from './todo.resolver';
export * from './user.resolver';
