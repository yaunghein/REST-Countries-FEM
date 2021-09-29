import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  margin-top: 1em;

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
    margin-top: 1.8em;
    /* width: 100%; */
    justify-content: space-between;
  }
`

export const Flag = styled.img`
  width: 46%;
  height: 28em;
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
  width: 50%;

  @media (max-width: 600px) {
    width: 100%;
  }

  &:first-of-type {
    @media (max-width: 600px) {
      margin-bottom: 1.5em;
    }
  }
`

export const BorderCountriesFrame = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 2.78em;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const BorderCountriesGroup = styled.div`
  margin-left: 0.28em;
  margin-top: -0.56em;

  @media (max-width: 600px) {
    margin-top: 0.56em;
  }
`

export const BorderCountry = styled(Link)`
  display: inline-block;
  margin: 0 0.56em 0.56em 0;
  background: ${({ theme }) => theme.element};
  box-shadow: 0px 2px 2px 0 rgba(30, 30, 30, 0.08);
  padding: 0.56em 1.11em;
  border-radius: 0.28em;
  transition: all 0.2s var(--timing-cubic);

  &:hover {
    transform: translateY(-0.2em) scale(1.05) rotate(1deg);
    box-shadow: 0px 8px 16px 0 rgba(30, 30, 30, 0.1);
  }
`
