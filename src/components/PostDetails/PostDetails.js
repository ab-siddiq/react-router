import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
        .then(data=>setPost(data))
    },[postId])
    return (
    
        <div>
            
            <h2 className='font-bold text-2xl text-green-600'>{post.id}</h2>
            <h5 className='font-bold text-xl'>{post.title}</h5>
            <p>{ post.body}</p>
        </div>
    );
};

export default PostDetails;