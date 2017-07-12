import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Login from './Login'
import Menu from './Menu'
export default class extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Login />
          <Menu />
        </div>
      </MuiThemeProvider>
    )
  }
}
