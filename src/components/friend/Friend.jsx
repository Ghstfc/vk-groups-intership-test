import React from 'react';
import cl from './Friend.module.css'

const Friend = ({friend}) => {
    return (
        <li className={cl.friend}>
            {`${friend.first_name} ${friend.last_name}`}
        </li>
    );
};

export default Friend;