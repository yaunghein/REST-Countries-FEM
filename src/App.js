import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Details } from './pages'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/:country' component={Details} />
      </Switch>
    </Router>
  )
}

export default App
