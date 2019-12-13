import gql from 'graphql-tag';

export const query = gql`
  {
    posts: getPosts {
      id
      title
      user {
        name
      }
    }
  }
`;
