import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Adoption from './Adoption'
import Birth from './Birth'
const StatMenu = ({ routes }) => (
  <div>
    <h2>Ipis Menu</h2>
    <ul>
      <li><Link to="/ipis/statmenu/adoption">Adoption</Link></li>
      <li><Link to="/ipis/statmenu/birth">Birth</Link></li>
    </ul>

    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </div>
)
const routes = [
  {
    path: '/ipis/statmenu',
    component: StatMenu,
    routes: [
      {
        path: '/ipis/statmenu/adoption',
        component: Adoption
      },
      {
        path: '/ipis/statmenu/birth',
        component: Birth
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

const RouteConfigStat= () => (
  <Router>
    <div>
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  </Router>
)

export default RouteConfigStat