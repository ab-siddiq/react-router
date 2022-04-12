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
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4'>
            <div className='col-span-2 block items-center justify-center p-2 sm:order-2 lg:order-1 md:order-1 order-2'>
                <p className='font-bold text-green-900 text-2xl text-center bg-green-200 py-2'>Post Id</p>
                <div className="grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4 gap-2 p-2 text-center">

                {posts.map(post => <Link className='' key={post.id} to={`/posts/${post.id}`}><div className='bg-green-900 py-2 text-green-300 font-bold'>{post.id}</div></Link>)}
                </div>
            </div>
            
            <div className="text-justify px-3 py-2 sm:order-1 lg:order-2 md:order-2 order-1">
            <h4 className='font-bold text-2xl text-green-900 text-center bg-green-200 py-2'>Post Details</h4>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Posts;