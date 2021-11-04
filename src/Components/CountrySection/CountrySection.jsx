import React, {useState, useEffect} from 'react'
import { CountryContainer } from "./style"
import CountryCard from "./CountryCard/CountryCard"
import { useGlobalContext } from "../../GlobalState/Provider"

function CountrySection() {
    const { countries, region, input } = useGlobalContext();

    const [filterCountries, setFilterCountries] = useState([])
    
    useEffect(() => {
        if (region.length >= 0) {
            if (region === "All") {
                setFilterCountries(countries);
            } else {
                const newCountries = countries.filter((country) => country.region === region)
                setFilterCountries(newCountries)
            }
        }   if (input.length > 0) {
                //Search
                const inputToLowerCase = input.toString().toLowerCase();
                const result = countries.filter(country => country.name.toString().toLowerCase().indexOf(inputToLowerCase) > -1)
                setFilterCountries(result)    
        }
    }, [countries, region, input])


    return (
        <CountryContainer>
            {filterCountries.map((country, index) => <CountryCard key={index} {...country}/>)}
        </CountryContainer>
    )

}

export default CountrySection
