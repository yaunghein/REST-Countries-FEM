import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Details } from './pages'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme/themes'
import useTheme from './theme/useTheme'
import { GlobalStyles } from './utility-components'
import HeaderContainer from './containers/HeaderContainer'

const App = () => {
  const [theme, toggleTheme] = useTheme()
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router basename='/REST-Countries-FEM'>
        <HeaderContainer theme={theme} toggleTheme={toggleTheme} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:country' component={Details} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
