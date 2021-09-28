import { Header } from '../components'

const HeaderContainer = ({ theme, toggleTheme }) => {
  return (
    <Header bg={theme.element} padding='1.67em 5.56em' boxShadow='0px 2px 5px 0 rgba(80, 80, 80, 0.08)'>
      <Header.Frame>
        <Header.Logo to='/'>Where in the world?</Header.Logo>

        <Header.ThemeSwitcher onClick={toggleTheme}>
          <svg width='34' height='36' viewBox='0 0 34 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M14.3434 3.38809C14.3148 3.08219 14.1952 2.79187 14 2.55464C13.7945 2.30214 13.5126 2.12313 13.1967 2.04452C12.8808 1.9659 12.5479 1.99191 12.248 2.11864C6.228 4.62264 2 10.5306 2 17.4186C2 26.5706 9.468 33.9986 18.688 33.9986C21.1726 34.0026 23.6268 33.452 25.8717 32.387C28.1165 31.322 30.0954 29.7695 31.664 27.8426C31.8698 27.5934 31.9874 27.2832 31.9986 26.9602C32.0098 26.6372 31.914 26.3195 31.726 26.0566C31.5479 25.8038 31.2993 25.609 31.0112 25.4966C30.7231 25.3842 30.4083 25.3592 30.106 25.4246C29.12 25.6346 28.094 25.7446 27.04 25.7446C18.96 25.7446 12.404 19.2326 12.404 11.1906C12.3999 8.77323 13.0037 6.39359 14.16 4.27064C14.308 4.00142 14.3719 3.69399 14.3434 3.38809Z'
              fill={theme === 'light' ? 'transparent' : 'hsl(0, 0%, 100%)'}
              stroke={theme === 'light' ? '#111517' : 'hsl(0, 0%, 100%)'}
              strokeWidth='3'
            />
          </svg>
          Dark Mode
        </Header.ThemeSwitcher>
      </Header.Frame>
    </Header>
  )
}

export default HeaderContainer
