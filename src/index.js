import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './pages/App'
import MainRoute from './route/Routes'
import registerServiceWorker from './registerServiceWorker'

injectTapEventPlugin();
ReactDOM.render(
  <Router  routes={MainRoute} >
    <App />
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
