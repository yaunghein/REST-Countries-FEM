import ReactDOM from 'react-dom'
import App from './App'
import { GlobalStyles } from './utility-components'
import ReduxStoreProvider from './redux'

ReactDOM.render(
  <ReduxStoreProvider>
    <GlobalStyles />
    <App />
  </ReduxStoreProvider>,
  document.getElementById('root')
)
