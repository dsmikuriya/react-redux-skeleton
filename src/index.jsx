import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'

import createStore from './create-store'
import HomeContainer from './containers/Home'

document.addEventListener('DOMContentLoaded', () => {
  const store = createStore()

  return ReactDOM.render(
    <Provider store={ store }>
      <HashRouter>
          <Route path='/' component={ HomeContainer } />
      </HashRouter>
    </Provider>,
    document.getElementById('app')
  )
})
