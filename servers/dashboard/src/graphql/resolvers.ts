import { AlbumFinder, CommentFinder, PhotoFinder, PostFinder, TodoFinder, UserFinder } from './finders';

export const resolvers = {
  Query: {
    getAlbums: async (_, args, context) => {
      return await AlbumFinder.getAlbums();
    },
    getAlbumById: async (_, args, context) => {
      return await AlbumFinder.getAlbumById(args.albumId);
    },
    getComments: async (_, args, context) => {
      return await CommentFinder.getComments();
    },
    getCommentsByPostId: async (_, args, context) => {
      return await CommentFinder.getCommentsByPostId(args.postId);
    },
    getCommentById: async (_, args, context) => {
      return await CommentFinder.getCommentById(args.commentId);
    },
    getPhotos: async (_, args, context) => {
      return await PhotoFinder.getPhotos();
    },
    getPhotoById: async (_, args, context) => {
      return await PhotoFinder.getPhotoById(args.photoId);
    },
    getPosts: async (_, args, context) => {
      return await PostFinder.getPosts();
    },
    getPostById: async (_, args, context) => {
      return await PostFinder.getPostById(args.postId);
    },
    getTodos: async (_, args, context) => {
      return await TodoFinder.getTodos();
    },
    getTodoById: async (_, args, context) => {
      return await TodoFinder.getTodoById(args.todoId);
    },
    getUsers: async (_, args, context) => {
      return await UserFinder.getUsers();
    },
    getUserById: async (_, args, context) => {
      return await UserFinder.getUserById(args.userId);
    }
  },
  Album: {
    photos: async (parent, args, context) => {
      return await PhotoFinder.getPhotosByAlbumId(parent.id);
    },
    user: async (parent, args, context) => {
      return await UserFinder.getUserById(parent.userId);
    }
  },
  Photo: {
    album: async (parent, args, context) => {
      return await AlbumFinder.getAlbumById(parent.albumId);
    }
  },
  Post: {
    comments: async (parent, args, context) => {
      return await CommentFinder.getCommentsByPostId(parent.id);
    },
    user: async (parent, args, context) => {
      return await UserFinder.getUserById(parent.userId);
    }
  },
  User: {
    albums: async (parent, args, context) => {
      return await AlbumFinder.getAlbumsByUserId(parent.id);
    },
    todos: async (parent, args, context) => {
      return await TodoFinder.getTodosByUserId(parent.id);
    }
  }
};
