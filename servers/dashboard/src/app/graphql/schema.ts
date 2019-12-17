import { gql } from 'apollo-server-express';

export const schema = gql`
  type Album {
    id: ID!
    title: String
    user: User
    photos: [Photo]
  }
  type Photo {
    id: ID!
    title: String
    url: String
    thumbnailUrl: String
    album: Album
  }
  type Post {
    id: ID!
    title: String
    body: String
    comments: [Comment]
    user: User
  }
  type Comment {
    id: ID!
    name: String
    email: String
    body: String
    post: Post
  }
  type Todo {
    id: ID!
    title: String
    completed: Boolean
    user: User
  }
  type User {
    id: ID!
    name: String
    username: String
    email: String
    address: Address
    phone: String
    website: String
    company: Company
    albums: [Album]
    todos: [Todo]
  }
  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }
  type Geo {
    lat: String
    lng: String
  }
  type Company {
    name: String
    catchPhrase: String
    bs: String
  }
  type Query {
    getAlbums: [Album]
    getAlbumById(albumId: ID!): Album
    getComments: [Comment]
    getCommentsByPostId: [Comment]
    getCommentById(commentId: ID!): Comment
    getPhotos: [Photo]
    getPhotoById(photoId: ID!): Photo
    getPosts: [Post]
    getPostById(postId: ID!): Post
    getTodos: [Todo]
    getTodoById(todoId: ID!): Todo
    getUsers: [User]
    getUserById(userId: ID!): User
  }
`;
