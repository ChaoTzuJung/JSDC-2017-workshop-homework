import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import App from './containers/App.jsx'
import rootReducer from './reducers/rootReducer'

const store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(reduxThunk),
);

class NewsApp extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
  
}

ReactDOM.render(<NewsApp/>, document.getElementById('root'));