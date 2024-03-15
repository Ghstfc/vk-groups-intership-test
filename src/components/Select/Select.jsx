import React from 'react';
import cl from './Select.module.css'

const Select = ({options, onChange, selectedFilter}) => {
    return (
        <select
            className={cl.select}
            value={selectedFilter}
            onChange={event => onChange(event.target.value)}
        >
            {options.map((option)=>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    );
};

export default Select;