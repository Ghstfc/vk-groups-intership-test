import React from 'react';
import cl from './Friends.module.css'
import Friend from "../Friend/Friend";

const Friends = ({friends}) => {
    return (
        <ul className={cl.friends}>
            {friends.map((friend,index)=>
                <Friend key={index} friend={friend}/>
            )}
        </ul>
    );
};

export default Friends;