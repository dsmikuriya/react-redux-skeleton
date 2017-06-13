import React from 'react'

import NaviComponent from './Navi'
import HeaderComponent from './Header'
import MainContainer from '../containers/Main'
import FooterComponent from './Footer'

export default class Top extends React.Component {
  render() {
    return (
      <div>
        <NaviComponent />
        <div className="container">
          <HeaderComponent />
          <MainContainer />
          <FooterComponent />
        </div>
      </div>
    )
  }
}
