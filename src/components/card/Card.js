import { Section } from '../../utility-components'
import { Frame, Item, Flag, Content, CountryName, MetaGroup, MetaKey, MetaValue } from './CardStyles'

export default function Card({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>
}

Card.Frame = function CardFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

Card.Item = function CardItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

Card.Flag = function CardFlag({ ...restProps }) {
  return <Flag {...restProps} />
}

Card.Content = function CardContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>
}

Card.CountryName = function CardCountryName({ children, ...restProps }) {
  return <CountryName {...restProps}>{children}</CountryName>
}

Card.MetaGroup = function CardMetaGroup({ children, ...restProps }) {
  return <MetaGroup {...restProps}>{children}</MetaGroup>
}

Card.MetaKey = function CardMetaKey({ children, ...restProps }) {
  return <MetaKey {...restProps}>{children}</MetaKey>
}

Card.MetaValue = function CardMetaValue({ children, ...restProps }) {
  return <MetaValue {...restProps}>{children}</MetaValue>
}
