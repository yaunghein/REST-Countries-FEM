import { Details, Card } from '../components'
import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSelectedCountry, removeSelectedCountry, getRelatedCountries } from '../redux/countries/actions'
import { DetailsSkeleton, CardSkeleton } from '../utility-components'

const DetailsContainer = () => {
  const { country } = useParams()
  const history = useHistory()
  const { isLoading, selectedCountry, relatedCountries } = useSelector(globalState => globalState.countriesState)
  const { name, flags, tld, region, subregion, unMember, capital, borders } = selectedCountry

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
            <Details.Flag src={flags && flags[0]} alt={`${name?.common}-flag`} />
            <Details.Content>
              <Details.CountryName>{name?.common}</Details.CountryName>
              <Details.MetaFrame>
                <Details.MetaGroup>
                  <Card.MetaGroup>
                    <Card.MetaKey>Official Name:</Card.MetaKey>
                    <Card.MetaValue>{name?.official}</Card.MetaValue>
                  </Card.MetaGroup>

                  <Card.MetaGroup>
                    <Card.MetaKey>Population:</Card.MetaKey>
                    <Card.MetaValue>Fix API v3, please 😂</Card.MetaValue>
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
                    <Card.MetaValue>{tld && tld[0]}</Card.MetaValue>
                  </Card.MetaGroup>

                  <Card.MetaGroup>
                    <Card.MetaKey>Currencies:</Card.MetaKey>
                    <Card.MetaValue>
                      {/* {currencies ? currencies.map(currency => currency.name).join(', ') : 'not provided!'} */}
                      Fix API v3, please 😂
                    </Card.MetaValue>
                  </Card.MetaGroup>

                  <Card.MetaGroup>
                    <Card.MetaKey>Languages:</Card.MetaKey>
                    <Card.MetaValue>
                      {/* {languages && languages.map(language => language.name).join(', ')} */}
                      Fix API v3, please 😂
                    </Card.MetaValue>
                  </Card.MetaGroup>

                  <Card.MetaGroup>
                    <Card.MetaKey>UN Member:</Card.MetaKey>
                    <Card.MetaValue>{unMember ? 'Yes' : 'No'}</Card.MetaValue>
                  </Card.MetaGroup>
                </Details.MetaGroup>
              </Details.MetaFrame>

              <Details.BorderCountriesFrame>
                <Card.MetaKey>Border Countries:</Card.MetaKey>
                <Details.BorderCountriesGroup>
                  <Details.BorderCountry>Zzz</Details.BorderCountry>
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
              .filter(country => country.name.common !== selectedCountry?.name?.common)
              .map(country => {
                const { id, flags, name, region, capital, unMember } = country
                return (
                  <Card.Item key={id} to={`/${name.common.toLowerCase()}`}>
                    <Card.Flag src={flags[0]} alt={`${name.common}-flag`} />
                    <Card.Content>
                      <Card.CountryName>{name.common}</Card.CountryName>
                      <Card.MetaGroup>
                        <Card.MetaKey>Region:</Card.MetaKey>
                        <Card.MetaValue>{region}</Card.MetaValue>
                      </Card.MetaGroup>
                      <Card.MetaGroup>
                        <Card.MetaKey>Capital:</Card.MetaKey>
                        <Card.MetaValue>{capital || 'Not provided.'}</Card.MetaValue>
                      </Card.MetaGroup>
                      <Card.MetaGroup>
                        <Card.MetaKey>UN Member: </Card.MetaKey>
                        <Card.MetaValue>{unMember ? 'Yes' : 'No'}</Card.MetaValue>
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
