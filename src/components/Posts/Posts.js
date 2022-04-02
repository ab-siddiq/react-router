import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div className='m-2'>
            {posts.map(post => <Link key={post.id} to={`/posts/${post.id}`}>{post.id}</Link>)}
        </div>
    );
};

export default Posts;