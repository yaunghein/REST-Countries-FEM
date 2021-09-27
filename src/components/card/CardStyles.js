import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Frame = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
  gap: 2.78em;
`

export const Item = styled(Link)`
  overflow: hidden;
  border-radius: 0.56em;
  background: var(--clr-element);
  box-shadow: 0px 2px 5px 0 rgba(80, 80, 80, 0.08);
  animation: growUp 0.2s var(--timing-cubic) forwards;

  @keyframes growUp {
    from {
      opacity: 0;
      transform: translateY(2em);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const Flag = styled.img`
  width: 100%;
  height: 13em;
`

export const Content = styled.div`
  padding: 1.67em 1.67em 2.22em;
`

export const CountryName = styled.h2`
  font-size: 1.4em;
  margin-bottom: 1.11em;
`

export const MetaGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.56em;
`

export const MetaKey = styled.p`
  font-weight: 600;
`

export const MetaValue = styled.p`
  margin-left: 0.28em;
  opacity: 0.75;
`
