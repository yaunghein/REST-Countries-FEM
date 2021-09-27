import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 2.78em;
  padding: 0.8em 4em;
  border: none;
  border-radius: 0.56em;
  background: var(--clr-element);
  box-shadow: 0px 2px 5px 0 rgba(80, 80, 80, 0.16);
`

export const Flag = styled.img`
  width: 46%;
  height: 26em;
  animation: fadeIn 0.2s ease-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const Content = styled.main`
  width: 46%;
  animation: fadeIn 0.2s ease-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const CountryName = styled.h1`
  font-size: 2.4em;
  font-weight: 900;
  margin-bottom: 0.7em;
`

export const MetaFrame = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const MetaGroup = styled.div``

export const BorderCountriesFrame = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.78em;
`

export const BorderCountriesGroup = styled.div`
  margin-left: 0.28em;
`

export const BorderCountry = styled.div`
  margin-left: 0.28em;
`
