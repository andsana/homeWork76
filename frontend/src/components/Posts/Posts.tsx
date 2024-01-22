import React from 'react';
import PostItem from './PostItem';
import {Post} from '../../types';
interface Props {
  posts: Post[];
}

const Posts: React.FC<Props> = ({posts}) => {
  return (
    <>
      <h4>Posts</h4>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}/>
      ))}
    </>
  );
};

export default Posts;