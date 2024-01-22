import {useEffect, useState} from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import PostForm from './components/PostForm/PostForm';
import Posts from './components/Posts/Posts';
import {Post} from './types';

let BASE_URL = 'http://146.185.154.90:8000/messages';
let datetime: string | null = null;

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let url = BASE_URL;

      if (datetime !== null) {
        url += '?datetime=' + datetime;
      }

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network error: ' + response.status);
        }

        const newPosts: Post[] = await response.json();

        if (newPosts.length > 0) {
          const lastPost = newPosts[newPosts.length - 1];
          datetime = lastPost.datetime;
          setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    void fetchData();
    const intervalId = setInterval(fetchData, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const createPost = async (post: Post) => {
    const data = new URLSearchParams();
    data.set('id', post.id);
    data.set('author', post.author);
    data.set('message', post.message);
    data.set('datetime', post.datetime);

    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        console.log('Post created successfully!');
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="container-fluid">
        <div className="mt-2 row">
          <div className="col-4">
            <PostForm onSubmit={createPost}/>
          </div>
          <div className="col-4">
            <Posts posts={posts}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;