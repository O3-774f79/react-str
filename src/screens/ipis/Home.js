import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import StatMenu from './stat/Home'
import Report from './report/Home'

const Ipis = ({ routes }) => (
  <div>
    <h2>Ipis Menu</h2>
    <ul>
      <li><Link to="/ipis/statmenu">StatMenu</Link></li>
      <li><Link to="/ipis/report">Report</Link></li>
    </ul>

    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </div>
)
const routes = [
  {
    path: '/ipis',
    component: Ipis,
    routes: [
      {
        path: '/ipis/statmenu',
        component: StatMenu
      },
      {
        path: '/ipis/report',
        component: Report
      }
    ]
  }
]
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
)

const RouteConfigExample = () => (
  <Router>
    <div>
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  </Router>
)

export default RouteConfigExample
