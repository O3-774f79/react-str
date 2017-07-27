import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Eis from './Eis'
import Emp from './Emp'
import Fee from './Fee'
import LookUpTable from './LookupTable'
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
        <Route path="/genapp/emp" component={Emp} />
        <Route path="/genapp/fee" component={Fee} />
        <Route path="/genapp/lookuptable" component={LookUpTable} />
      </div>
    </Router>
  </Switch>
)

export default HomeGenapp