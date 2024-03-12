import React from 'react';
import Group from "./group/Group";

const Groups = ({groups, setVisible, setFriends}) => {
    return (
        groups.length === 0
            ?
            <h1 className={'mainTitle'}>Групп с выбранными параметрами нет</h1>
            :
            <div>
                <h1 className={'mainTitle'}>Список Групп</h1>
                {groups.map((group, index) =>
                    <Group
                        group={group}
                        key={index}
                        setVisible={setVisible}
                        setFriends={setFriends}
                    />
                )}
            </div>
    );
};

export default Groups;