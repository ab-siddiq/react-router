import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2 block items-center justify-center'>
                <p className='font-bold text-green-900 text-2xl bg-green-200 py-2'>Post Id</p>
                {posts.map(post => <div className='inline-block  m-7 h-2 w-1'><Link className='m-2 w-full bg-green-600 p-5' key={post.id} to={`/posts/${post.id}`}>{post.id}</Link></div>)}
            </div>
            
            <div className="text-justify px-3">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Posts;