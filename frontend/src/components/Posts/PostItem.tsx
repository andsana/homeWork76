import React, {useEffect} from 'react';
import {Post} from '../../types';
import {Card, CardContent, Typography} from "@mui/material";

interface Props {
  post: Post;
}

const PostItem: React.FC<Props> = ({post}) => {
  console.log('[PostItem] render');

  useEffect(() => {
    console.log('[PostItem] mounted/updated');
  }, []);

  return (
      <Card className="mb-2">
        <CardContent>
          <div className="row no-gutters">
            <div className="col-sm-8">
              <div>
                <Typography variant="h5" component="h2">
                  {post.author}
                </Typography>
                <Typography variant="h6" color="textSecondary" className="small">
                  {post.message}
                </Typography>
                <Typography variant="body2" color="textSecondary" className="small">
                  {post.datetime}
                </Typography>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
  );
};

export default PostItem;