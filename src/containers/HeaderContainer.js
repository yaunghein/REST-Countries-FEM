import { Header } from '../components'

const HeaderContainer = () => {
  return (
    <Header bg='var(--clr-element)' padding='1.67em 5.56em' boxShadow='0px 2px 5px 0 rgba(80, 80, 80, 0.08)'>
      <Header.Frame>
        <Header.Logo to='/'>Where in the world?</Header.Logo>
        <Header.ThemeSwitcher>🌜 Dark Mode</Header.ThemeSwitcher>
      </Header.Frame>
    </Header>
  )
}

export default HeaderContainer
