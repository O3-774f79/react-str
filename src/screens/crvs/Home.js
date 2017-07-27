import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import AddAdop from '../crvs/AddAdop'
import AddBirth from '../crvs/AddBirth'
import AddDeath from '../crvs/AddDeath'
import AddDivorce from '../crvs/AddDivorce'
import AddMarriage from '../crvs/AddMarriage'
import CerSingle from '../crvs/CerSingle'
import EnqAdop from '../crvs/EnqAdop'
import EnqBirth from '../crvs/EnqBirth'
import EnqDeath from '../crvs/EnqDeath'
import EnqDivorce from '../crvs/EnqDivorce'
import EnqMarriage from '../crvs/EnqMarriage'
import UpdAdop from '../crvs/UpdAdop'
import UpdBirth from '../crvs/UpdBirth'
import UpdDivorce from '../crvs/UpDivorce'
import UpdMarriage from '../crvs/UpdMarriage'
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
          <li><Link to="/crvs/cersingle">CerSingle</Link></li>
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
        <Route path="/crvs/adddeath" component={AddDeath} />
        <Route path="/crvs/adddivorce" component={AddDivorce} />
        <Route path="/crvs/addmarriage" component={AddMarriage} />
        <Route path="/crvs/cersingle" component={CerSingle} />
        <Route path="/crvs/emqadop" component={EnqAdop} />
        <Route path="/crvs/emqbirth" component={EnqBirth} />
        <Route path="/crvs/emqdeath" component={EnqDeath} />
        <Route path="/crvs/emqdivorce" component={EnqDivorce} />
        <Route path="/crvs/emqmarriage" component={EnqMarriage}/>
        <Route path="/crvs/updadop" component={UpdAdop} />
        <Route path="/crvs/updbirth" component={UpdBirth} />
        <Route path="/crvs/upddivorce" component={UpdDivorce} />
        <Route path="/crvs/updmarriage" component={UpdMarriage} />
      </div>
    </Router>
  </Switch>
)

export default BasicExample
