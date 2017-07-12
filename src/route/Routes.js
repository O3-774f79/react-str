import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import AboutPage from '../pages/About'
import PageNotFound from '../pages/PageNotFound'

import HomeCrvs from '../pages/crvs/Home'
import HomeGenapp from '../pages/genapp/Home'
import HomeIpis from '../pages/ipis/Home'
import HomeMigrate from '../pages/migrate/Home'
import HomeNat from '../pages/nat/Home'
import HomeRes from '../pages/res/Home'
import HomeMobile from '../pages/mobile/Home'
import LoginMobile from '../pages/mobile_unit/login'
class MainRoute extends Component {
  render() {
    return (
      <div className="">
        <Switch>
          <Route exact path="/" component={AboutPage} />
          <Route path="/migrate" component={HomeMigrate} />
          <Route path="/ipis" component={HomeIpis} />
          <Route path="/crvs" component={HomeCrvs} />
          <Route path="/nat" component={HomeNat} />
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
