import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Frame = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16em, 1fr));
  gap: 2.78em;
`
export const Heading = styled.h2`
  margin-bottom: 1.6em;
  margin-top: -1.5em;

  @media (max-width: 600px) {
    margin-top: 0;
  }
`

export const Item = styled(Link)`
  overflow: hidden;
  border-radius: 0.56em;
  background: ${({ theme }) => theme.element};
  box-shadow: 0px 5px 8px 0 rgba(30, 30, 30, 0.08);
  animation: fadeIn 0.2s ease-out forwards;
  transition: all 0.2s var(--timing-cubic);

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &:hover {
    transform: translateY(-1em) scale(1.05) rotate(1deg);
    box-shadow: 0px 8px 32px 0 rgba(30, 30, 30, 0.1);
  }
`

export const Flag = styled.img`
  width: 100%;
  height: 13em;
  margin-bottom: -0.4em;
`

export const Content = styled.div`
  padding: 2.07em 1.67em 2.22em;
  background: ${({ theme }) => theme.element};
`

export const CountryName = styled.h2`
  font-size: 1.4em;
  margin-bottom: 1.11em;
`

export const MetaGroup = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 0.56em;
`

export const MetaKey = styled.p`
  font-weight: 600;
`

export const MetaValue = styled.p`
  margin-left: 0.28em;
  opacity: 0.75;
`
