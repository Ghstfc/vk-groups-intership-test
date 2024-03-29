import {useEffect, useState} from "react";
import './styles/App.css'
import Groups from "./components/Groups";
import GroupsService from "./API/GroupsService";
import {useFetching} from "./hooks/useFetching";
import Filter from "./components/filter/Filter";
import Modal from "./components/modal/Modal";
import Friends from "./components/friends/Friends";

function App() {

    // Filter options
    const privateOptions = [
        {value: 'all', name: 'Все'},
        {value: 'closed', name: 'Закрытые'},
        {value: 'open', name: 'Открытые'},
    ]

    const friendsOptions = [
        {value: 'all', name: 'Все'},
        {value: 'positive', name: 'Есть друзья'},
        {value: 'negative', name: 'Нет друзей'},
    ]

    // Custom hook for fetching data or getting error
    const [fetching, loading, error] = useFetching(fetchGroups)

    // Data
    const [groups, setGroups] = useState([])
    const [colors, setColors] = useState([{value: 'all', name: 'Все'}])
    const [activeFriends, setActiveFriends] = useState([])
    const [modal, setModal] = useState(false)

    // Filters
    const [selectedFilter, setSelectedFilter] = useState('all')
    const [selectedColor, setSelectedColor] = useState('all')
    const [selectedFriends, setSelectedFriends] = useState('all')

    // Filtered data
    const [filteredGroups, setFilteredGroups] = useState(groups)

    // Get data from server
    useEffect(() => {
        fetching()
    }, []);

    // Make available multiple filters (maybe not effective, but good)
    useEffect(() => {
        let result = [...groups]
        result = filterGroupsByPrivate(result)
        result = filterGroupsByAvatarColor(result)
        result = filterGroupsByFriends(result)
        setFilteredGroups(result)
    }, [selectedFilter, selectedColor, selectedFriends]);


    // Filtering functions
    function filterGroupsByPrivate(groups) {
        switch (selectedFilter) {
            case 'all':
                return groups
            case 'closed':
                return groups.filter((group) => group.closed)
            case 'open':
                return groups.filter((group) => !group.closed)
        }
    }

    function filterGroupsByAvatarColor(groups) {
        if (selectedColor === 'all')
            return groups
        return groups.filter((group) => {
            return (group.avatar_color && group.avatar_color === selectedColor)
        })
    }

    function filterGroupsByFriends(groups) {
        switch (selectedFriends) {
            case 'all':
                return groups
            case 'positive':
                return groups.filter((group) => group.friends)
            case 'negative':
                return groups.filter((group) => !group.friends)
        }
    }

    // Function to talk with API (get data from server)
    async function fetchGroups() {
        return GroupsService.getAll().then((groups) => {
            setGroups(groups)
            setFilteredGroups(groups)
            getAllColors(groups)
        });
    }


    // Function to precalculate all available colours
    function getAllColors(groups) {
        const colorsSet = new Set()
        groups.forEach((group) => {
            if (group.avatar_color)
                colorsSet.add(group.avatar_color)
        })
        const colorsArr = []
        colorsSet.forEach((color) => {
            colorsArr.push({
                value: color, name: color.charAt(0).toUpperCase() + color.slice(1)
            })
        })
        setColors([...colors, ...colorsArr])
    }


    return (
        <div className="App">
            {error
                ?
                <h1>{error}</h1>
                :
                <div>
                    <Modal
                        visible={modal}
                        setVisible={setModal}
                    >
                        <Friends friends={activeFriends}/>
                    </Modal>
                    <h1 className={'mainTitle'}>Фильтры</h1>
                    <Filter
                        options={privateOptions}
                        selectedFilter={selectedFilter}
                        setSelectedFilter={setSelectedFilter}
                        title={'По приватности'}
                    />
                    <Filter
                        options={colors}
                        selectedFilter={selectedColor}
                        setSelectedFilter={setSelectedColor}
                        title={'По цвету'}
                    />
                    <Filter
                        options={friendsOptions}
                        selectedFilter={selectedFriends}
                        setSelectedFilter={setSelectedFriends}
                        title={'По наличию друзей в группе'}
                    />
                    {loading
                        ? <h1 className={'mainTitle'}>Идет загрузка...</h1>
                        : <Groups
                            groups={filteredGroups}
                            setVisible={setModal}
                            setFriends={setActiveFriends}
                        />
                    }
                </div>
            }
        </div>
    );
}


export default App;
