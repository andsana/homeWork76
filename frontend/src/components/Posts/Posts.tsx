import React from 'react';
import PostItem from './PostItem';
import {Post} from '../../types';
import {Typography} from "@mui/material";

interface Props {
    posts: Post[];
}

const Posts: React.FC<Props> = ({posts}) => {
    return (
        <>
            <Typography variant="h6">Add new message</Typography>
            {posts.map((post) => (
                <PostItem
                    key={post.id}
                    post={post}/>
            ))}
        </>
    );
};

export default Posts;