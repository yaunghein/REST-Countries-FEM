import { Section } from '../../utility-components'
import {
  Frame,
  BackButton,
  Flag,
  Content,
  CountryName,
  MetaFrame,
  MetaGroup,
  BorderCountriesFrame,
  BorderCountriesGroup,
  BorderCountry,
} from './DetailsStyles'

export default function Details({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>
}

Details.Frame = function DetailsFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

Details.BackButton = function DetailsBackButton({ children, ...restProps }) {
  return <BackButton {...restProps}>{children}</BackButton>
}

Details.MetaGroup = function DetailsMetaGroup({ children, ...restProps }) {
  return <MetaGroup {...restProps}>{children}</MetaGroup>
}

Details.Flag = function DetailsFlag({ ...restProps }) {
  return <Flag {...restProps} />
}

Details.Content = function DetailsContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>
}

Details.CountryName = function DetailsCountryName({ children, ...restProps }) {
  return <CountryName {...restProps}>{children}</CountryName>
}

Details.MetaFrame = function DetailsMetaFrame({ children, ...restProps }) {
  return <MetaFrame {...restProps}>{children}</MetaFrame>
}

Details.BorderCountriesFrame = function DetailsBorderCountriesFrame({ children, ...restProps }) {
  return <BorderCountriesFrame {...restProps}>{children}</BorderCountriesFrame>
}

Details.BorderCountriesGroup = function DetailsBorderCountriesGroup({ children, ...restProps }) {
  return <BorderCountriesGroup {...restProps}>{children}</BorderCountriesGroup>
}

Details.BorderCountry = function DetailsBorderCountry({ children, ...restProps }) {
  return <BorderCountry {...restProps}>{children}</BorderCountry>
}
