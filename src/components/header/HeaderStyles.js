import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Frame = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled(Link)`
  font-size: 1.94em;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 1.27em;
  }
`

export const ThemeSwitcher = styled.button`
  color: ${({ theme }) => theme.text};
  background: transparent;
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: 1.2em;
    margin-right: 0.56em;
  }
`
