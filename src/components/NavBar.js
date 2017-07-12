import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const activeClass = { activeClassName: 'is-active' }

class AppNavDrawer extends Component {
  render() {
    return (
      <nav className="">
        <div className="">
          <div>
            <NavLink exact to="/" className="" {...activeClass}>
              Home
            </NavLink>
          </div>
          <div>
            {' '}<NavLink to="/migrate" className="" {...activeClass}>
              Migrate
            </NavLink>
          </div>
          <div>
            {' '}<NavLink to="/ipis" className="" {...activeClass}>
              Ipis
            </NavLink>
          </div>
          <div>
            <NavLink to="/crvs" className="" {...activeClass}>
              Crvs
            </NavLink>
          </div>
          <div>
            {' '}<NavLink to="/nat" className="" {...activeClass}>
              Nat
            </NavLink>
          </div>
          <div>
            {' '}<NavLink to="/res" className="" {...activeClass}>
              Res
            </NavLink>
          </div>
          <div>
            {' '}<NavLink to="/genapp" className="" {...activeClass}>
              Genapp
            </NavLink>
          </div>
          <div>
            {' '}<NavLink to="/mobile" className="" {...activeClass}>
              Mobile
            </NavLink>
          </div>
          <div>
            {' '}<NavLink to="/mobile_unit" className="" {...activeClass}>
              Mobile_unit
            </NavLink>
          </div>
        </div>
      </nav>
    )
  }

  
}
export default AppNavDrawer
