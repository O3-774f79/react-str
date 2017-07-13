import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Eis from './eis'
const HomeGenapp = () => (
  <Switch>
    <Router>
      <div>
        <ul>
          <li><Link to="/genapp/eis">eis</Link></li>
          <li><Link to="/genapp/emp">emp</Link></li>
          <li><Link to="/genapp/fee">fee</Link></li>
          <li><Link to="/genapp/lookuptable">lookuptable</Link></li>
        </ul>

        <Route path="/genapp/eis" component={Eis} />
        <Route path="/genapp/emp" component={Eis} />
        <Route path="/genapp/fee" component={Eis} />
        <Route path="/genapp/lookuptable" component={Eis} />
        <Route path="/genapp" component={Eis} />
      </div>
    </Router>
  </Switch>
)

export default HomeGenapp