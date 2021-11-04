import React from 'react'
import { Card, CardImage, CardDetail} from "./style"
import {Title, Field, Heading, Text} from "../../../GlobalStyle"
import { Link } from "react-router-dom"
import { numberWithCommas } from "../../utils"


function CountryCard({ name, population, region, capital, flag }) {

    return (       
    <Card as= {Link} to={`/${name}`} >
        <CardImage src={flag}/>
        <CardDetail>
            <Title marginTop={10} marginBottom={10}>{name}</Title>
            <Field>
                <Heading>Population:</Heading>
                <Text>{numberWithCommas(population)}</Text>
            </Field>
            <Field>
                <Heading>Region:</Heading>
                <Text>{region}</Text>
            </Field>
            <Field>
                <Heading>Capital:</Heading>
                <Text>{capital}</Text>
            </Field>
        </CardDetail>
        </Card>)
}

export default CountryCard
