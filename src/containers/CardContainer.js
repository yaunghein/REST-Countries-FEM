import { Card } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCountries } from '../redux/countries/actions'

const CardContainer = () => {
  const { isLoading, countries } = useSelector(globalState => globalState.countriesState)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  //del later
  console.log(countries[0])

  return (
    <Card>
      <Card.Frame>
        {isLoading && <h2>Loading...</h2>}
        {countries.map(country => {
          const { id, flags, name, population, region, capital } = country
          return (
            <Card.Item key={id} to={`/${name.toLowerCase()}`}>
              <Card.Flag src={flags[0]} alt={`${name}-flag`} />
              <Card.Content>
                <Card.CountryName>{name}</Card.CountryName>
                <Card.MetaGroup>
                  <Card.MetaKey>Population:</Card.MetaKey>
                  <Card.MetaValue>{population}</Card.MetaValue>
                </Card.MetaGroup>
                <Card.MetaGroup>
                  <Card.MetaKey>Region:</Card.MetaKey>
                  <Card.MetaValue>{region}</Card.MetaValue>
                </Card.MetaGroup>
                <Card.MetaGroup>
                  <Card.MetaKey>Capital:</Card.MetaKey>
                  <Card.MetaValue>{capital}</Card.MetaValue>
                </Card.MetaGroup>
              </Card.Content>
            </Card.Item>
          )
        })}
      </Card.Frame>
    </Card>
  )
}

export default CardContainer
