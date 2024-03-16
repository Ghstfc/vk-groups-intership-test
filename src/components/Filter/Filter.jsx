import React from 'react';
import Select from "../Select/Select";
import cl from './Filter.module.css'

const Filter = ({setSelectedFilter, selectedFilter, options, title}) => {
    return (
        <div className={cl.filter}>
            <h2 className={cl.nameOfFilter}>{title}</h2>
            <Select
                options={options}
                onChange={setSelectedFilter}
                selectedFilter={selectedFilter}
            />
        </div>
    );
};

export default Filter;