import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import AddAdop from '../crvs/AddAdop'
import AddBirth from '../crvs/AddBirth'

const BasicExample = () => (
  <Switch>
    <Router>
      <div>
        <ul>
          <li><Link to="/crvs/addadop">AddAdop</Link></li>
          <li><Link to="/crvs/addbirth">AddBirth</Link></li>
          <li><Link to="/crvs/adddeath">AddDeath</Link></li>
          <li><Link to="/crvs/adddivorce">AddDivorce</Link></li>
          <li><Link to="/crvs/addmarriage">AddMarriage</Link></li>
          <li><Link to="/crvs/cersingle">CerSinger</Link></li>
          <li><Link to="/crvs/emqadop">EnqAdop</Link></li>
          <li><Link to="/crvs/emqbirth">EnqBirth</Link></li>
          <li><Link to="/crvs/emqdeath">EnqDeath</Link></li>
          <li><Link to="/crvs/emqdivorce">EnqDivorce</Link></li>
          <li><Link to="/crvs/updadop">UpdAdop</Link></li>
          <li><Link to="/crvs/updbirth">UpdBirth</Link></li>
          <li><Link to="/crvs/upddivorce">UpdDivorce</Link></li>
          <li><Link to="/crvs/updmarriage">UpdMarriage</Link></li>

        </ul>

        <Route path="/crvs/addadop" component={AddAdop} />
        <Route path="/crvs/addbirth" component={AddBirth} />
        <Route path="/crvs/adddeath" component={AddBirth} />
        <Route path="/crvs/adddivorce" component={AddBirth} />
        <Route path="/crvs/addmarriage" component={AddBirth} />
        <Route path="/crvs/cersingle" component={AddBirth} />
        <Route path="/crvs/emqadop" component={AddBirth} />
        <Route path="/crvs/emqbirth" component={AddBirth} />
        <Route path="/crvs/emqdeath" component={AddBirth} />
        <Route path="/crvs/emqdivorce" component={AddBirth} />
        <Route path="/crvs/updadop" component={AddBirth} />
        <Route path="/crvs/updbirth" component={AddBirth} />
        <Route path="/crvs/upddivorce" component={AddBirth} />
        <Route path="/crvs/updmarriage" component={AddBirth} />
      </div>
    </Router>
  </Switch>
)

export default BasicExample
