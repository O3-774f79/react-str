import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import AddNat from './AddNat'
const HomeNat = () => (
  <Switch>
    <Router>
      <div>
        <ul>
          <li><Link to="/nat/addnat">addnat</Link></li>
          <li><Link to="/nat/enqnat">enqnat</Link></li>
          <li><Link to="/nat/report">report</Link></li>
        </ul>

        <Route path="/nat/addnat" component={AddNat} />
        <Route path="/nat/enqnat" component={AddNat} />
        <Route path="/nat/report" component={AddNat} />
        <Route path="/nat" component={AddNat} />
      </div>
    </Router>
  </Switch>
)

export default HomeNat
