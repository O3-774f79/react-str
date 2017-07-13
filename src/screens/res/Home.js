import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import AddHouse from './AddHouse'
const HomeRes = () => (
  <Switch>
    <Router>
      <div>
        <ul>
          <li><Link to="/res/addhouse">addhouse</Link></li>
          <li><Link to="/res/edithouse">edithouse</Link></li>
          <li><Link to="/res/enqhouse">enqhouse</Link></li>
          <li><Link to="/res/enqmove">enqmove</Link></li>
          <li><Link to="/res/move">move</Link></li>
          <li><Link to="/res/updmove">updmove</Link></li>
        </ul>

        <Route path="/res/addhouse" component={AddHouse} />
        <Route path="/res/edithouse" component={AddHouse} />
        <Route path="/res/enqhouse" component={AddHouse} />
        <Route path="/res/enqmove" component={AddHouse} />
        <Route path="/res/move" component={AddHouse} />
        <Route path="/res/updmove" component={AddHouse} />
        <Route path="/res" component={AddHouse} />
      </div>
    </Router>
  </Switch>
)
export default HomeRes
