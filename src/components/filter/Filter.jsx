import React from 'react';
import Select from "../select/Select";
import cl from './Filter.module.css'

const Filter = ({setSelectedFilter, selectedFilter, options, title}) => {
    return (
        <div className={cl.filter}>
            <h2 className={'nameOfFilter'}>{title}</h2>
            <Select
                options={options}
                onChange={setSelectedFilter}
                selectedFilter={selectedFilter}
            />
        </div>
    );
};

export default Filter;