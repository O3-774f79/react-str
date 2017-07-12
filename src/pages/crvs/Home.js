import React from 'react'
import { BrowserRouter as Router, Route, Link ,Switch} from 'react-router-dom'

import AddAdop from '../crvs/AddAdop'
import AddBirth from '../crvs/AddBirth'
const BasicExample = () => (
  <Switch >
  <Router>
    <div>
      <ul>
        <li><Link to="/crvs/addadop">AddAdop</Link></li>
        <li><Link to="/crvs/addbirth">AddBirth</Link></li>
      </ul>

      <Route path="/crvs/addadop" component={AddAdop} />
      <Route path="/crvs/addbirth" component={AddBirth} />
    </div>
  </Router>
  </Switch>
)

export default BasicExample
