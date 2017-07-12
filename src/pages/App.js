import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router } from 'react-router-dom'
import Login from './Login'
import Menu from './Menu'
export default class extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <Login />
            <Menu />
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}
