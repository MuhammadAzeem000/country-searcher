import React from 'react'
import { Link, useParams } from "react-router-dom";
import {extractCurrency, numberWithCommas, extractLanguages} from "../utils"
import { BiArrowBack } from "react-icons/bi";
import { Field, Heading, Text, Icon, Title, Button } from "../../GlobalStyle"
import { useGlobalContext } from "../../GlobalState/Provider"
import Loading from '../Loading';
import {
    Wrapper,
    BackButton,
    DetailContainer,
    CountryFlag,
    CountryInfoWrapper,
    CountryInfo,
    BorderCountries,
    BorderBtnContainer
} from "./style"

function EachCountry() {
    const { countries, loading } = useGlobalContext();
    const { countryName } = useParams();


    if (loading || countries.length === 0) {
        return <Loading />
    } else {
        const country = countries.find(country => country.name === countryName)
        const { flag, name, nativeName, topLevelDomain, population, currencies, region, languages, subregion, capital, borders } = country
        return (
            <Wrapper>
                    <BackButton as={Link} to="/" width={140} height={40}><Icon as={BiArrowBack} />Back</BackButton>
                    <DetailContainer>
                        <CountryFlag src={flag}/>
                        <CountryInfo>
                            <Title>
                                {name}
                            </Title>
                            <CountryInfoWrapper>
                            <Field>
                                <Heading>Native Name:</Heading>
                                    <Text>{nativeName}</Text>
                            </Field>
                            <Field>
                                <Heading>Top Level Domain:</Heading>
                                <Text>{topLevelDomain}</Text>
                            </Field>
                            <Field>
                                <Heading>Population:</Heading>
                                    <Text>{numberWithCommas(population)}</Text>
                            </Field>
                            <Field>
                                <Heading>Currencies:</Heading>
                                    <Text>{extractCurrency(currencies, "name")}</Text>
                            </Field>
                            <Field>
                                <Heading>Region:</Heading>
                                <Text>{region}</Text>
                            </Field>
                            <Field>
                                <Heading>Languages:</Heading>
                                <Text>{extractLanguages(languages)}</Text>
                            </Field>
                            <Field>
                                <Heading>Sub Region:</Heading>
                                <Text>{subregion}</Text>
                            </Field>
                            <Field>
                                <Heading>Capital:</Heading>
                                    <Text>{capital}</Text>
                            </Field>     
                            </CountryInfoWrapper>
                            <BorderCountries>
                                <Heading>Border Countries:</Heading>
                                <BorderBtnContainer>
                                    {borders.map((border, index) =>
                                        <Button key={index} width={100} height={40}>{border}</Button>
                                    )}
                                </BorderBtnContainer>
                        </BorderCountries>
                        </CountryInfo>
                    </DetailContainer>
                </Wrapper>
        )
    }
}

export default EachCountry
