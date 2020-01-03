import { Post } from '@nx-demo/interface';

import { user } from './user.mock';

export const post: Post = {
  id: 'post-id-1',
  title: 'Post 1',
  user,
};
