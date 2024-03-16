import React from 'react';
import Group from "./Group/Group";

const Groups = ({groups, setVisible, setFriends}) => {

    if (groups.length === 0)
        return (<h1 className={'mainTitle'}>Групп с выбранными параметрами нет</h1>)

    return (
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