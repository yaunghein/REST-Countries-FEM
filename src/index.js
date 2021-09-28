import ReactDOM from 'react-dom'
import App from './App'
import ReduxStoreProvider from './redux'

ReactDOM.render(
  <ReduxStoreProvider>
    <App />
  </ReduxStoreProvider>,
  document.getElementById('root')
)
