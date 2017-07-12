import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import AppNavDrawer from '../components/NavBar'
import MainRoute from '../route/Routes'

export default withRouter(class extends Component {
    render() {
        
        return <div>
            <AppNavDrawer />
            <p>&nbsp;</p>
            <MainRoute />
        </div>
    }
})