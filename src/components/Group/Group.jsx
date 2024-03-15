import React from 'react';
import cl from './Group.module.css'

const Group = ({group, setVisible, setFriends}) => {
    function getMembers() {
        const membersCount = group.members_count;
        const first = membersCount % 10
        const second = membersCount % 100

        if (first === 1 && (second < 10 || second > 20))
            return `${membersCount} подписчик`
        else if (first > 1 && first < 5 && (second < 10 || second > 20))
            return `${membersCount} подписчика`
        else
            return `${membersCount} подписчиков`
    }

    function showFriends() {
        setVisible(true)
        setFriends(group.friends)
    }

    return (
        <div className={cl.group}>
            <div className={cl.avatar}
                 style={{backgroundColor: group.avatar_color ? group.avatar_color : "grey"}}/>
            <div className={cl.meta}>
                <h2 className={cl.name}>
                    {group.name}
                </h2>
                <h4 className={cl.closed}>
                    {group.closed ? 'Закрытая' : 'Открытая'}
                </h4>
                <div className={cl.membersCount}>{getMembers()}</div>
                {
                    group.friends
                        ? <span className={cl.friends} onClick={showFriends}>
                        {`Друзей в группе: ${group.friends.length}`}
                        </span>
                        : ''
                }
            </div>
        </div>
    );
};

export default Group;