import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import AddHouse from './AddHouse'
import EditHouse from './EditHouse'
import EnqHouse from './EnqHouse'
import EnqMove from './EnqMove'
import Move from './Move'
import UpMove from './UpdMove'
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
        <Route path="/res/edithouse" component={EditHouse} />
        <Route path="/res/enqhouse" component={EnqHouse} />
        <Route path="/res/enqmove" component={EnqMove} />
        <Route path="/res/move" component={Move} />
        <Route path="/res/updmove" component={UpMove} />
      </div>
    </Router>
  </Switch>
)
export default HomeRes
