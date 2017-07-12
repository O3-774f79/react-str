import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import AddAdop from '../crvs/AddAdop'
import AddBirth from '../crvs/AddBirth'
const BasicExample = () => (
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
)

const Home = () => (
  <div>
    <h2>AddAdop</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export default BasicExample
