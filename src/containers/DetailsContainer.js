import { Details, Card } from '../components'
import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSelectedCountry, removeSelectedCountry, getRelatedCountries } from '../redux/countries/actions'
import { DetailsSkeleton, CardSkeleton } from '../utility-components'
import { formatPopulation } from '../helpers/formatPopulation'

const DetailsContainer = () => {
  const { country } = useParams()
  const history = useHistory()
  const { isLoading, selectedCountry, relatedCountries, countries } = useSelector(
    globalState => globalState.countriesState
  )
  const {
    name,
    nativeName,
    population,
    flags,
    topLevelDomain,
    region,
    subregion,
    capital,
    currencies,
    languages,
    timezones,
    borders,
  } = selectedCountry

  const dispatch = useDispatch()
  const isInitialRender = useRef(true)

  useEffect(() => {
    isInitialRender.current = false
  }, [])

  useEffect(() => {
    dispatch(getSelectedCountry(country))

    return () => dispatch(removeSelectedCountry())
  }, [dispatch, country])

  useEffect(() => {
    dispatch(getRelatedCountries(region))
  }, [selectedCountry])

  //del later
  console.log(isLoading)
  console.log(relatedCountries)

  if (isLoading || isInitialRender.current) {
    return (
      <Details>
        <Details.Frame>
          <DetailsSkeleton />
        </Details.Frame>
      </Details>
    )
  } else {
    return (
      <>
        <Details>
          <Details.Frame>
            <Details.Flag src={flags?.svg} alt={`${name}-flag`} />
            <Details.Content>
              <Details.CountryName>{name}</Details.CountryName>
              <Details.MetaFrame>
                <Details.MetaGroup>
                  <Card.MetaGroup>
                    <Card.MetaKey>Native Name:</Card.MetaKey>
                    <Card.MetaValue>{nativeName}</Card.MetaValue>
                  </Card.MetaGroup>

                  <Card.MetaGroup>
                    <Card.MetaKey>Population:</Card.MetaKey>
                    <Card.MetaValue>{formatPopulation(population)}</Card.MetaValue>
                  </Card.MetaGroup>

                  <Card.MetaGroup>
                    <Card.MetaKey>Region:</Card.MetaKey>
                    <Card.MetaValue>{region}</Card.MetaValue>
                  </Card.MetaGroup>

                  <Card.MetaGroup>
                    <Card.MetaKey>Sub Region:</Card.MetaKey>
                    <Card.MetaValue>{subregion}</Card.MetaValue>
                  </Card.MetaGroup>

                  <Card.MetaGroup>
                    <Card.MetaKey>Capital:</Card.MetaKey>
                    <Card.MetaValue>{capital}</Card.MetaValue>
                  </Card.MetaGroup>
                </Details.MetaGroup>
                <Details.MetaGroup>
                  <Card.MetaGroup>
                    <Card.MetaKey>Top Level Domain:</Card.MetaKey>
                    <Card.MetaValue>{topLevelDomain && topLevelDomain[0]}</Card.MetaValue>
                  </Card.MetaGroup>

                  <Card.MetaGroup>
                    <Card.MetaKey>Currencies:</Card.MetaKey>
                    <Card.MetaValue>
                      {currencies
                        ? currencies.map(currency => `${currency.name} ( ${currency.symbol} )`).join(', ')
                        : 'not provided!'}
                    </Card.MetaValue>
                  </Card.MetaGroup>

                  <Card.MetaGroup>
                    <Card.MetaKey>Languages:</Card.MetaKey>
                    <Card.MetaValue>{languages && languages.map(language => language.name).join(', ')}</Card.MetaValue>
                  </Card.MetaGroup>

                  <Card.MetaGroup>
                    <Card.MetaKey>Timezone:</Card.MetaKey>
                    <Card.MetaValue>{timezones && timezones.map(timezone => timezone).join(', ')}</Card.MetaValue>
                  </Card.MetaGroup>
                </Details.MetaGroup>
              </Details.MetaFrame>

              <Details.BorderCountriesFrame>
                <Card.MetaKey style={{ width: '33%' }}>Border Countries:</Card.MetaKey>
                <Details.BorderCountriesGroup>
                  {selectedCountry.borders
                    ? countries.map(
                        (country, index) =>
                          selectedCountry.borders.includes(country.alpha3Code) && (
                            <Details.BorderCountry key={index} to={`/${country.name}`}>
                              {country.name}
                            </Details.BorderCountry>
                          )
                      )
                    : 'No border country.'}
                </Details.BorderCountriesGroup>
              </Details.BorderCountriesFrame>
              <Details.BackButton onClick={() => history.goBack()}>
                <img src='./icons/arrow.svg' alt='' />
                Back
              </Details.BackButton>
            </Details.Content>
          </Details.Frame>
        </Details>

        <Card>
          <Card.Heading>
            Other {relatedCountries.length === 0 ? '...' : relatedCountries.length - 1} countries from {region} region
          </Card.Heading>
          <Card.Frame>
            {isLoading && <CardSkeleton />}
            {relatedCountries
              .filter(country => country.name !== selectedCountry?.name)
              .map(country => {
                const { id, flags, name, region, capital, population } = country
                return (
                  <Card.Item key={id} to={`/${name.toLowerCase()}`}>
                    <Card.Flag src={flags?.svg} alt={`${name}-flag`} />
                    <Card.Content>
                      <Card.CountryName>{name}</Card.CountryName>
                      <Card.MetaGroup>
                        <Card.MetaKey>Region:</Card.MetaKey>
                        <Card.MetaValue>{region}</Card.MetaValue>
                      </Card.MetaGroup>
                      <Card.MetaGroup>
                        <Card.MetaKey>Capital:</Card.MetaKey>
                        <Card.MetaValue>{capital || 'Not provided'}</Card.MetaValue>
                      </Card.MetaGroup>
                      <Card.MetaGroup>
                        <Card.MetaKey>Population: </Card.MetaKey>
                        <Card.MetaValue>{population}</Card.MetaValue>
                      </Card.MetaGroup>
                    </Card.Content>
                  </Card.Item>
                )
              })}
          </Card.Frame>
        </Card>
      </>
    )
  }
}

export default DetailsContainer
