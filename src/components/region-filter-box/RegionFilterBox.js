import styled from 'styled-components'

const RegionFilterBox = ({ selectedRegion, setSelectedRegion }) => {
  return (
    <Select value={selectedRegion} onChange={({ target }) => setSelectedRegion(target.value)}>
      <Option value=''>All Countries</Option>
      <Option value='africa'>Africa</Option>
      <Option value='america'>America</Option>
      <Option value='asia'>Asia</Option>
      <Option value='europe'>Europe</Option>
      <Option value='oceania'>Oceania</Option>
    </Select>
  )
}

export default RegionFilterBox

const Select = styled.select`
  background: url('./icons/arrow-down.svg') no-repeat 90% 50%;
  background-size: 1.2em;
  background-color: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  border: none;
  width: 13.89em;
  height: 3.89em;
  padding: 0 1em;
  box-shadow: 0px 5px 8px 0 rgba(30, 30, 30, 0.08);
  border-radius: 0.56em;
  appearance: none;
  transition: all 0.2s ease-out;
`

const Option = styled.option``

// import Select from 'react-select'
// import styled from 'styled-components'

// const regionOptions = [
//   { value: '', label: 'All Countries' },
//   { value: 'africa', label: 'Africa' },
//   { value: 'america', label: 'America' },
//   { value: 'asia', label: 'Asia' },
//   { value: 'europe', label: 'Europe' },
//   { value: 'oceania', label: 'Oceania' },
// ]

// const customStyles = {
//   control: styles => ({
//     ...styles,
//     width: '13.89em',
//     height: '3.89em',
//     padding: '0 1em',
//     fontSize: '1.11em',
//     backgroundColor: 'var(--clr-element)',
//     boxShadow: '0px 5px 8px 0 rgba(30, 30, 30, 0.08)',
//     border: '0.14em solid rgba(0, 0, 0, 0.06)',
//     borderRadius: '0.56em',
//     outline: 'none',
//   }),
//   option: (styles, { isDisabled, isFocused, isSelected }) => {
//     return {
//       ...styles,
//       backgroundColor: isSelected ? 'rgba(0, 0, 0, 0.1)' : isFocused ? 'rgba(0, 0, 0, 0.06)' : '#fff',
//       color: 'rgba(0, 0, 0, 0.75)',
//       cursor: isDisabled ? 'not-allowed' : 'default',
//     }
//   },
// }
// styles={customStyles}
// const RegionFilterBox = props => {
//   return <StyledSelect options={regionOptions} placeholder='Filter by region' isSearchable {...props} />
// }

// const StyledSelect = styled(Select)`
//   .css-1s2u09g-control,
//   .css-1pahdxg-control {
//     background: ${({ theme }) => theme.element};
//     color: ${({ theme }) => theme.text};
//     border: none;
//     width: 13.89em;
//     height: 3.89em;
//     padding: 0 1em;
//     box-shadow: 0px 5px 8px 0 rgba(30, 30, 30, 0.08);
//   }

//   .react-select-2-listbox {
//     display: none;
//   }
// `

// export default RegionFilterBox
