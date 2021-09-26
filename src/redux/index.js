import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

const ReduxStoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxStoreProvider
