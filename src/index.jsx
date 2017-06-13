import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'

import createStore from './create-store'
import TopContainer from './containers/Top'

document.addEventListener('DOMContentLoaded', () => {
  const store = createStore()

  return ReactDOM.render(
    <Provider store={ store }>
      <HashRouter>
          <Route path='/' component={ TopContainer } />
      </HashRouter>
    </Provider>,
    document.getElementById('app')
  )
})
