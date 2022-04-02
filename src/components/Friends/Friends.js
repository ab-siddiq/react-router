import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
        .then(data=>setFriends(data))
    }, [])
    console.log(friends)
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-20'>
            {friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)}
        </div>
    );
};

export default Friends;