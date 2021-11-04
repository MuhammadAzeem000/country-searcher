import {useEffect} from "react"
import { Header, FilterSection, CountrySection, EachCountry, Loading} from "./Components"
import {ThemeProvider} from "styled-components"
import {light, dark} from "./Components/theme"
import {GlobalStyle} from "./GlobalStyle"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { useGlobalContext } from "./GlobalState/Provider";


function App() {
  const { dispatch, fetchCountries, theme, loading} = useGlobalContext();

  useEffect(() => {
    fetchCountries(dispatch)
  }, [fetchCountries, dispatch])
  
  return (
    <Router>
    <ThemeProvider theme={theme.state ? light : dark}>
      <GlobalStyle />
        <Header/>
        <Switch>
          <Route exact path="/">
            <FilterSection />
            {loading && <Loading/>}
            <CountrySection/>
          </Route>
          <Route path="/:countryName">
            <EachCountry/>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
