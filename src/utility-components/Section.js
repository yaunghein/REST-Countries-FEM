import styled from 'styled-components'

export default function Section({ children, ...restProps }) {
  return (
    <section>
      <Container {...restProps}>{children}</Container>
    </section>
  )
}

const Container = styled.div`
  background: ${({ bg }) => (bg ? bg : 'transparent')};
  padding: ${({ padding }) => (padding ? padding : '3.33em 5.56em')};
  box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : 'none')};

  @media (max-width: 1000px) {
    padding: 2.78em;
  }
`
Container.displayName = 'Container'
