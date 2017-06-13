import React from 'react'
import { Link } from 'react-router-dom'

export default class Navi extends React.Component {
  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">ServiceName</Link>
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div className="navbar-collapse collapse" id="navbar-main">
            <ul className="nav navbar-nav">
              <li><Link to="/">Page01</Link></li>
              <li><Link to="/">Page02</Link></li>
              <li><Link to="/">Page03</Link></li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">Page04</Link></li>
              <li><Link to="/">Page05</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
