import React from 'react'
import Search from "./Search/Search"
import Filter from "./Filter/Filter"
import {FilterContainer} from "./style"

function FilterSection() {
    return (
        <FilterContainer>
            <Search />
            <Filter/>
        </FilterContainer>
    )
}

export default FilterSection
