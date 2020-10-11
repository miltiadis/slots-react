import React from "react";

import {ReactComponent as FilterTop} from './svg/ico_top.svg';
import {ReactComponent as FilterNew} from './svg/ico_new.svg';
import {ReactComponent as FilterTAll} from './svg/ico_all.svg';

const FILTER_MAP = {
    ALL: {icon: <FilterTAll/>},
    NEW: {icon: <FilterNew/>},
    TOP: {icon: <FilterTop/>}
}

const FILTER_NAMES = Object.keys(FILTER_MAP)


const FilterButton = (props) => {
    const isActiveClass = props.isActive && 'is-active'

    return (
        <a
            className={`c-filter__item ${isActiveClass}`}
            href="#"
            onClick={() => props.setFilter(props.name)}
        >
            {props.icon}
            <span className="c-filter__label">{props.name}</span>
        </a>
    );
}


const Filter = (props) => {

    const filterList = () => {
        return FILTER_NAMES.map(name => {
            return <FilterButton
                key={name}
                name={name}
                icon={FILTER_MAP[name].icon}
                isActive={name === props.filter}
                setFilter={props.setFilter}
            />
        })
    }

    return (
        <div className="c-filter">
            {
                filterList()
            }
        </div>
    )
}


export default Filter


