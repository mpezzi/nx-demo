
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface Album {
    id: string;
    title?: string;
    userId: string;
    user?: User;
    photos?: Photo[];
}

export interface Comment {
    id: string;
    name?: string;
    email?: string;
    body?: string;
    postId: string;
    post?: Post;
}

export interface Photo {
    id: string;
    title?: string;
    url?: string;
    thumbnailUrl?: string;
    albumId: string;
    album?: Album;
}

export interface Post {
    id: string;
    title?: string;
    body?: string;
    comments?: Comment[];
    user?: User;
}

export interface IQuery {
    getAlbums(): Album[] | Promise<Album[]>;
    getAlbumById(albumId: string): Album | Promise<Album>;
    getComments(): Comment[] | Promise<Comment[]>;
    getCommentById(commentId: string): Comment | Promise<Comment>;
    getPhotos(): Photo[] | Promise<Photo[]>;
    getPhotoById(photoId: string): Photo | Promise<Photo>;
    getPosts(): Post[] | Promise<Post[]>;
    getPostById(postId: string): Post | Promise<Post>;
    getTodos(): Todo[] | Promise<Todo[]>;
    getTodoById(todoId: string): Todo | Promise<Todo>;
    getUsers(): User[] | Promise<User[]>;
    getUserById(userId: string): User | Promise<User>;
}

export interface Todo {
    id: string;
    title?: string;
    completed?: boolean;
    userId: string;
    user?: User;
}

export interface User {
    id: string;
    name?: string;
    username?: string;
    email?: string;
    address?: UserAddress;
    phone?: string;
    website?: string;
    company?: UserCompany;
    albums?: Album[];
    todos?: Todo[];
}

export interface UserAddress {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: UserAddressGeo;
}

export interface UserAddressGeo {
    lat?: string;
    lng?: string;
}

export interface UserCompany {
    name?: string;
    catchPhrase?: string;
    bs?: string;
}
