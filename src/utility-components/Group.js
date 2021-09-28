import styled from 'styled-components'

const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ margin }) => (margin ? margin : 0)};

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export default Group
