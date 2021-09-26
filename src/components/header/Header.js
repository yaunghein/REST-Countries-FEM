import { Section } from '../../utility-components'
import { Frame, Logo, ThemeSwitcher } from './HeaderStyles'

export default function Header({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>
}

Header.ThemeSwitcher = function HeaderThemeSwitcher({ children, ...restProps }) {
  return <ThemeSwitcher {...restProps}>{children}</ThemeSwitcher>
}
