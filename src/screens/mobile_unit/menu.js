import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import AddPerson from './AddPerson'
import ChkData from './ChkData'
import ExprortData from './ExportData'
import SendData from './SendData'

const MobileUnitMenu = () => (
  <Switch>
    <Router>
      <div>
        <ul>
          <li><Link to="/mobile_unit/addperson">addperson</Link></li>
          <li><Link to="/mobile_unit/chkdata">chkdata</Link></li>
          <li><Link to="/mobile_unit/exportdata">exportdata</Link></li>
          <li><Link to="/mobile_unit/senddata">senddata</Link></li>
        </ul>

        <Route path="/mobile_unit/addperson" component={AddPerson} />
        <Route path="/mobile_unit/chkdata" component={ChkData} />
        <Route path="/mobile_unit/exportdata" component={ExprortData} />
        <Route path="/mobile_unit/senddata" component={SendData} />
      </div>
    </Router>
  </Switch>
)
export default MobileUnitMenu
