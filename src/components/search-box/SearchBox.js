import styled from 'styled-components'

const SearchBox = props => {
  return <Input {...props} />
}

export default SearchBox

const Input = styled.input`
  width: 33.33em;
  height: 3.89em;
  padding: 0 1em 0 3.8em;
  font-size: 1.11em;
  background: url('./icons/search.svg') no-repeat 4% 50%;
  background-size: 1.4em;
  background-color: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  box-shadow: 0px 5px 8px 0 rgba(30, 30, 30, 0.08);
  border: none;
  border-radius: 0.56em;
  outline: none;
  transition: all 0.2s ease-out;

  @media (max-width: 600px) {
    width: 100%;
    height: 3.2em;
    font-size: 0.97em;
    padding: 0 1em 0 2.6em;
    background: url('./icons/search.svg') no-repeat 4% 50%;
    background-color: ${({ theme }) => theme.element};
    background-size: 1em;
    margin-bottom: 1.5em;
  }
`
