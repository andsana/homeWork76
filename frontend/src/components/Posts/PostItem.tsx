import React, {useEffect} from 'react';
import './PostItem.css';
import {Post} from '../../types';

interface Props {
  post: Post;
}

const PostItem: React.FC<Props> = ({post}) => {
  console.log('[PostItem] render');

  useEffect(() => {
    console.log('[PostItem] mounted/updated');
  }, []);

  return (
    <div>
      <div className="card mb-2">
        <div className="row no-gutters">
          <div className="col-sm-8">
            <div className="card-body">
              <h5 className="card-title">{post.author}</h5>
              <h6 className="card-text small">{post.message}</h6>
              <p className="card-text small">{post.datetime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;