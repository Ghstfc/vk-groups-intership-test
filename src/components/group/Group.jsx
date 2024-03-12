import React from 'react';
import cl from './Group.module.css'

const Group = ({group, setVisible, setFriends}) => {

    const first = group.members_count % 10
    const second = group.members_count % 100

    return (
        <div className={cl.group}>
            <div className={cl.avatar}
                 style={{backgroundColor: group.avatar_color ? group.avatar_color : "grey"}}/>
            <div className={cl.meta}>
                <h2 className={'name'}>
                    {group.name}
                </h2>
                <h4 className={'closed'}>
                    {group.closed ? 'Закрытая' : 'Открытая'}
                </h4>
                {
                    (first === 1 && (second < 10 || second > 20))
                        ? <div className={'membersCount'}>{group.members_count} подписчик</div>
                        : (first > 1 && first < 5 && (second < 10 || second > 20))
                            ? <div className={'membersCount'}>{group.members_count} подписчика</div>
                            : <div className={'membersCount'}>{group.members_count} подписчиков</div>

                }
                {
                    group.friends
                        ? <span className={cl.friends} onClick={() => {
                            setVisible(true)
                            setFriends(group.friends)
                        }}>
                        {`Друзей в группе: ${group.friends.length}`}
                        </span>
                        : ''
                }
            </div>
        </div>
    );
};

export default Group;