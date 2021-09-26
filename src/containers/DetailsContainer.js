import { Details, Card } from '../components'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSelectedCountry, removeSelectedCountry } from '../redux/countries/actions'

const DetailsContainer = () => {
  const { country } = useParams()
  const { isSelectedCountryLoading, selectedCountry } = useSelector(globalState => globalState.countriesState)
  const { name, flags, nativeName } = selectedCountry
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSelectedCountry(country))
    return () => dispatch(removeSelectedCountry())
  }, [dispatch, country])

  console.log(isSelectedCountryLoading, selectedCountry)

  if (isSelectedCountryLoading) {
    return (
      <Details>
        <Details.Frame>
          <h2>Loading...</h2>
        </Details.Frame>
      </Details>
    )
  }

  return (
    <Details>
      <Details.Frame>
        <Details.Flag src={flags[0]} alt={`${name}-flag`} />
        <Details.Content>
          <Details.CountryName>{name}</Details.CountryName>
          <Details.MetaFrame>
            <Card.MetaGroup>
              <Card.MetaKey>Native Name:</Card.MetaKey>
              <Card.MetaValue>{nativeName}</Card.MetaValue>
            </Card.MetaGroup>
          </Details.MetaFrame>
        </Details.Content>
      </Details.Frame>
    </Details>
  )
}

export default DetailsContainer
