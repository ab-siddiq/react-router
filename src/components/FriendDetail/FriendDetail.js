import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    console.log(friendId)
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;

        fetch(url)
            .then(res => res.json())
        .then(data=>setFriend(data))
    }, [friendId]);
    return (
        <div>
           
            {friend.name}<br/>
            {friend.email}<br/>
            {friend.phone}
        </div>
    );
};

export default FriendDetail;