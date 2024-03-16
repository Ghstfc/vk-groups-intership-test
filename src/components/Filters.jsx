import React from 'react';
import Filter from "./Filter/Filter";

const Filters = ({filters}) => {
    return (
        filters.map((filter)=>
            <Filter
                options={filter.options}
                selectedFilter={filter.selectedFilter}
                setSelectedFilter={filter.setSelectedFilter}
                title={filter.title}
            />
        )
    );
};

export default Filters;