import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class AppNavDrawer extends Component {
  render() {
    return (
      <nav className="">
        <div className="">
          <div>
            <NavLink exact to="/">
              Home
            </NavLink>
          </div>
          <div>
            <NavLink to="/migrate">
              Migrate
            </NavLink>
          </div>
          <div>
            <NavLink to="/ipis">
              Ipis
            </NavLink>
          </div>
          <div>
            <NavLink to="/crvs">
              Crvs
            </NavLink>
          </div>
          <div>
            <NavLink to="/nat">
              Nat
            </NavLink>
          </div>
          <div>
            <NavLink to="/res">
              Res
            </NavLink>
          </div>
          <div>
            <NavLink to="/genapp">
              Genapp
            </NavLink>
          </div>
          <div>
            <NavLink to="/mobile">
              Mobile
            </NavLink>
          </div>
          <div>
            <NavLink to="/mobile_unit">
              Mobile_unit
            </NavLink>
          </div>
        </div>
      </nav>
    )
  }
}
export default AppNavDrawer
