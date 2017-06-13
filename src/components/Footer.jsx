import React from 'react'
import { Link } from 'react-router-dom'

import moment from 'moment'

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-lg-12">
            <ul className="list-unstyled">
              <li className="pull-right">Page000</li>
              <li><Link to="/">Page001</Link></li>
              <li><Link to="/">Page002</Link></li>
              <li><Link to="/">Page003</Link></li>
            </ul>

            <p>This is React Redux Traning Repository.</p>
            <p>Created by dsmikuriya.</p>
            <p>go to <a href="https://github.com/dsmikuriya/react-redux-skeleton" target="_blank">GitHub</a></p>
          </div>
        </div>
      </footer>
    )
  }
}
