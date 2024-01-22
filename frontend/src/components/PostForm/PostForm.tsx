import React, {useState} from 'react';
import {Post, PostMutation} from '../../types';
import {Button, TextField, Typography} from '@mui/material';

interface Props {
    onSubmit: (post: Post) => void;
}

const PostForm: React.FC<Props> = ({onSubmit}) => {
    const [post, setPost] = useState<PostMutation>({
        author: '',
        message: '',
    });

    const changePost = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPost((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            id: Math.random().toString(),
            ...post,
            datetime: new Date().toISOString(),
        });
        setPost({author: '', message: ''});
    };

    return (
        <form onSubmit={onFormSubmit}>
            <Typography variant="h6">Add new message</Typography>
            <div className="form-group">
                <TextField
                    type="text"
                    name="author"
                    label="Author"
                    variant="outlined"
                    value={post.author}
                    onChange={changePost}
                    required
                    fullWidth
                />
            </div>
            <div className="form-group mt-2">
                <TextField
                    name="message"
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={post.message}
                    onChange={changePost}
                    required
                    fullWidth
                />
            </div>
            <Button type="submit" variant="contained" color="primary" className="mt-2">
                Create
            </Button>
        </form>
    );
};

export default PostForm;






