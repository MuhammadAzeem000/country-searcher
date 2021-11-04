import React from 'react'
import { Wrapper, Logo} from "./style"
import { BsMoon, BsSun } from "react-icons/bs";
import {Button, Icon} from "../../GlobalStyle"
import { useGlobalContext } from "../../GlobalState/Provider";
import { Link } from "react-router-dom";

function Header() {
    const { dispatch, theme, themeToggle, setRegion } = useGlobalContext();

    return (
        <Wrapper>
            <Logo as={Link} to="/" onClick={()=>setRegion(dispatch, "All")}>Where in the world?</Logo>
            <Button width={140} height={40} onClick={()=>themeToggle(dispatch)}>
                {theme.state ? <Icon as={BsSun}/> : <Icon as={BsMoon} />}
                {theme.state ? "Light Mode" : "Dark Mode"}</Button>
        </Wrapper>
    )
}

export default Header
