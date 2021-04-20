import React,{useState} from 'react'
import { FilterBox, Label, Options, Option, Icon } from "./style"
import {useGlobalContext} from "../../../GlobalState/Provider"
function Filter() {
    const [value, setValue] = useState({state: false, show:"none", label:"Filter by Region"})
    const regions = ["Asia", "Europe", "Africa", "Oceania", "Americas", "Polar", "Island"]

    const {setRegion, dispatch} = useGlobalContext()
   
    const toggle = () => {
        if (!value.state) {
            setValue({...value, state:true, show:"block"})
        } else {
            setValue({...value, state:false, show:"none"})

        }
    }

    const getValue = (e) => {
        const value = e.target.innerText
        setValue({ state: false, show: "none", label: value })
        if (value === "Island") {
        setRegion(dispatch, "")
        } else {
        setRegion(dispatch, value)
        }
    }

    return (
        <FilterBox>
            <Label as={"li"} onClick={toggle}>
                {value.label}
                <Icon/>
            </Label>
            <Options show={value.show}>
                {regions.map((region, index) =>
                    <Option as={"li"} key={index} onClick={getValue}>{region}</Option>
                )}
            </Options>
        </FilterBox>
    )
}

export default Filter
