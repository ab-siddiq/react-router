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
            <div className='col-span-2 block items-center justify-center p-2'>
                <p className='font-bold text-green-900 text-2xl bg-green-200 py-2'>Post Id</p>
                <div className="grid grid-cols-12 gap-2 p-2">

                {posts.map(post => <Link className='' key={post.id} to={`/posts/${post.id}`}><div className='bg-green-900 py-2 text-green-300 font-bold'>{post.id}</div></Link>)}
                </div>
            </div>
            
            <div className="text-justify px-3 py-2">
            <h4 className='font-bold text-2xl text-green-900 text-center bg-green-200 py-2'>Post Details</h4>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Posts;