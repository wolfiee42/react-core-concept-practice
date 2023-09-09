import { useState } from 'react';
import { useEffect } from 'react';
import Post from './Post';

export default function Posts() {
    const [posts, setposts] = useState([]);
    useEffect(()=>{
        postsInformation()
    }, [])
    const postsInformation = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        setposts(data);
    }
    return (
        <div>
            <h4>Posts: {posts.length}</h4>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}