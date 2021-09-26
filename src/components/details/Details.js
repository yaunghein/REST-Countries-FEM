import { Section } from '../../utility-components'
import {
  Frame,
  Flag,
  Content,
  CountryName,
  MetaFrame,
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
