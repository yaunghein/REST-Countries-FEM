import styled from 'styled-components'

export const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.8em 3.2em;
  font-weight: 600;
  font-size: 1.11em;
  border: none;
  border-radius: 0.56em;
  background: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  box-shadow: 0px 2px 5px 0 rgba(80, 80, 80, 0.16);

  img {
    width: 1.4em;
    margin-right: 0.56em;
    margin-left: -0.2em;
    transition: all 0.2s var(--timing-cubic);
  }

  &:hover img {
    transform: translateX(-0.5em);
  }

  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
  }
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

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    margin-bottom: 1.5em;
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

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const CountryName = styled.h1`
  font-size: 2.4em;
  font-weight: 900;
  margin-bottom: 0.7em;

  @media (max-width: 600px) {
    margin-bottom: 0.3em;
    font-size: 1.6em;
  }
`

export const MetaFrame = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const MetaGroup = styled.div`
  &:first-of-type {
    @media (max-width: 600px) {
      margin-bottom: 1.5em;
    }
  }
`

export const BorderCountriesFrame = styled.div`
  display: flex;
  align-items: center;
  margin: 2.78em 0;
`

export const BorderCountriesGroup = styled.div`
  margin-left: 0.28em;
`

export const BorderCountry = styled.div`
  margin-left: 0.28em;
`
