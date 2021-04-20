import React from 'react'
import { SearchContainer, SearchIcon, Input } from "./style"
import {useGlobalContext} from "../../../GlobalState/Provider"

function Search() {
    const {dispatch, searchHandler} = useGlobalContext()
    return (
        <SearchContainer>
            <SearchIcon />
            <Input placeholder={"Search for a country..."} onChange={(e)=>searchHandler(dispatch, e.target.value)}/>
        </SearchContainer>
    )
}

export default Search
