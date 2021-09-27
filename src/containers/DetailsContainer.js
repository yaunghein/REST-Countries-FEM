import { Details, Card } from '../components'
import { useParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSelectedCountry, removeSelectedCountry } from '../redux/countries/actions'
import DetailsSkeleton from '../utility-components/DetailsSkeleton'

const DetailsContainer = () => {
  const { country } = useParams()
  const { isLoading, selectedCountry } = useSelector(globalState => globalState.countriesState)
  const { name, flags, nativeName, topLevelDomain, population, currencies, region, languages, capital, borders } =
    selectedCountry
  const dispatch = useDispatch()
  const isInitialRender = useRef(true)

  useEffect(() => {
    isInitialRender.current = false
  }, [])

  useEffect(() => {
    dispatch(getSelectedCountry(country))
    return () => dispatch(removeSelectedCountry())
  }, [dispatch, country])

  //del later
  console.log(isLoading)

  if (isLoading || isInitialRender.current) {
    return (
      <Details>
        <Details.BackButton to='/'>Back</Details.BackButton>
        <Details.Frame>
          <DetailsSkeleton />
        </Details.Frame>
      </Details>
    )
  } else {
    return (
      <Details>
        <Details.BackButton to='/'>Back</Details.BackButton>
        <Details.Frame>
          <Details.Flag src={flags && flags[0]} alt={`${name}-flag`} />
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
                  <Card.MetaValue>{population}</Card.MetaValue>
                </Card.MetaGroup>

                <Card.MetaGroup>
                  <Card.MetaKey>Region:</Card.MetaKey>
                  <Card.MetaValue>{(region && region.split(' ')[1]) || region}</Card.MetaValue>
                </Card.MetaGroup>

                <Card.MetaGroup>
                  <Card.MetaKey>Sub Region:</Card.MetaKey>
                  <Card.MetaValue>{region}</Card.MetaValue>
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
                    {currencies ? currencies.map(currency => currency.name).join(', ') : 'not provided!'}
                  </Card.MetaValue>
                </Card.MetaGroup>

                <Card.MetaGroup>
                  <Card.MetaKey>Languages:</Card.MetaKey>
                  <Card.MetaValue>{languages && languages.map(language => language.name).join(', ')}</Card.MetaValue>
                </Card.MetaGroup>
              </Details.MetaGroup>
            </Details.MetaFrame>

            <Details.BorderCountriesFrame>
              <Card.MetaKey>Border Countries:</Card.MetaKey>
              <Details.BorderCountriesGroup>
                <Details.BorderCountry>Zzz</Details.BorderCountry>
              </Details.BorderCountriesGroup>
            </Details.BorderCountriesFrame>
          </Details.Content>
        </Details.Frame>
      </Details>
    )
  }
}

export default DetailsContainer
