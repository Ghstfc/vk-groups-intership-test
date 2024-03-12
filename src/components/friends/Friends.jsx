import React from 'react';
import cl from './Friends.module.css'
import Friend from "../friend/Friend";

const Friends = ({friends}) => {
    return (
        <ul className={cl.friends}>
            {friends.map((friend)=>
                <Friend key={friend.first_name + friend.last_name} friend={friend}/>
            )}
        </ul>
    );
};

export default Friends;