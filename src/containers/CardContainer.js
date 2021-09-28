import { Card, SearchBox, RegionFilterBox } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { getCountries } from '../redux/countries/actions'
import { CardSkeleton, Group } from '../utility-components'

const CardContainer = () => {
  const { isLoading, countries } = useSelector(globalState => globalState.countriesState)
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')
  const filteredCountries = countries
    .filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(country => country.region.toLowerCase().includes(selectedRegion))

  //del later
  // console.log(isLoading)

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  //del later
  // console.log(selectedRegion)

  return (
    <Card>
      <Group margin='0 0 2.78em'>
        <SearchBox
          placeholder='Search for a country...'
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
        />
        <RegionFilterBox selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
      </Group>
      <Card.Frame>
        {isLoading && <CardSkeleton />}
        {/* searchTerm is empty at first, so filteredCountries match all countries from redux state */}
        {filteredCountries.map(country => {
          const { id, flags, name, region, capital, unMember } = country
          return (
            <Card.Item key={id} to={`/${name.common.toLowerCase()}`}>
              <Card.Flag src={flags[0]} alt={`${name.common}-flag`} />
              <Card.Content>
                <Card.CountryName>{name.common}</Card.CountryName>
                {/* population is not provided in v3 of api */}
                {/* <Card.MetaGroup>
                  <Card.MetaKey>Population:</Card.MetaKey>
                  <Card.MetaValue>{population}</Card.MetaValue>
                </Card.MetaGroup> */}
                <Card.MetaGroup>
                  <Card.MetaKey>Region:</Card.MetaKey>
                  <Card.MetaValue>{region}</Card.MetaValue>
                </Card.MetaGroup>
                <Card.MetaGroup>
                  <Card.MetaKey>Capital:</Card.MetaKey>
                  <Card.MetaValue>{capital || 'Not provided'}</Card.MetaValue>
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
  )
}

export default CardContainer
