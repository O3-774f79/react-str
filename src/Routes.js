import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PageNotFound from './screens/PageNotFound'

import HomeCrvs from './screens/crvs/Home'
import HomeGenapp from './screens/genapp/Home'
import HomeIpis from './screens/ipis/Home'
import HomeMigrate from './screens/migrate/Home'
import ModalGallery from './screens/nat/Home'
import HomeRes from './screens/res/Home'
import HomeMobile from './screens/mobile/Home'
import LoginMobile from './screens/mobile_unit/login'
import AppNavDrawer from './components/NavBar'

class MainRoute extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={AppNavDrawer} />
          <Route path="/migrate" component={HomeMigrate} />
          <Route path="/ipis" component={HomeIpis} />
          <Route path="/crvs" component={HomeCrvs} />
          <Route path="/nat" component={ModalGallery} />
          <Route path="/res" component={HomeRes} />
          <Route path="/genapp" component={HomeGenapp} />
          <Route path="/mobile" component={HomeMobile} />
          <Route path="/mobile_unit" component={LoginMobile} />        
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    )
  }
}
export default MainRoute
