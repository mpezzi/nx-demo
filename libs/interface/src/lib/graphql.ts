
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class Album {
    id: string;
    title?: string;
    userId: string;
    user?: User;
    photos?: Photo[];
}

export class Comment {
    id: string;
    name?: string;
    email?: string;
    body?: string;
    postId: string;
    post?: Post;
}

export class Photo {
    id: string;
    title?: string;
    url?: string;
    thumbnailUrl?: string;
    albumId: string;
    album?: Album;
}

export class Post {
    id: string;
    title?: string;
    body?: string;
    comments?: Comment[];
    user?: User;
}

export abstract class IQuery {
    abstract getAlbums(): Album[] | Promise<Album[]>;

    abstract getAlbumById(albumId: string): Album | Promise<Album>;

    abstract getComments(): Comment[] | Promise<Comment[]>;

    abstract getCommentById(commentId: string): Comment | Promise<Comment>;

    abstract getPhotos(): Photo[] | Promise<Photo[]>;

    abstract getPhotoById(photoId: string): Photo | Promise<Photo>;

    abstract getPosts(): Post[] | Promise<Post[]>;

    abstract getPostById(postId: string): Post | Promise<Post>;

    abstract getTodos(): Todo[] | Promise<Todo[]>;

    abstract getTodoById(todoId: string): Todo | Promise<Todo>;

    abstract getUsers(): User[] | Promise<User[]>;

    abstract getUserById(userId: string): User | Promise<User>;
}

export class Todo {
    id: string;
    title?: string;
    completed?: boolean;
    userId: string;
    user?: User;
}

export class User {
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

export class UserAddress {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: UserAddressGeo;
}

export class UserAddressGeo {
    lat?: string;
    lng?: string;
}

export class UserCompany {
    name?: string;
    catchPhrase?: string;
    bs?: string;
}
