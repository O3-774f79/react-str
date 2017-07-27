import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import EditMigate from './EditMigate'
import ReportMigrate from './ReportMigrate'

const HomeMigrate = () => (
  <Switch>
    <Router>
      <div>
        <ul>
          <li><Link to="/migrate/editmigrate">eis</Link></li>
          <li><Link to="/migrate/reportmigrate">emp</Link></li>
          <li><Link to="/">black</Link></li>
        </ul>

        <Route path="/migrate/editmigrate" component={EditMigate} />
        <Route path="/migrate/reportmigrate" component={ReportMigrate} />
      </div>
    </Router>
  </Switch>
)
export default HomeMigrate