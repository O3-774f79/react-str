import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
class HomeNat extends React.Component {
  render() {
    return (
      <div>
        <Switch >
          <Route exact path='/' component={Home}/>
          <Route path='/gallery' component={Gallery}/>
        </Switch>
    
      </div>
    )
  }
}

const Home = () => (
  <div>
    <Link to='/gallery'>Visit the Gallery</Link>
    <h2>Featured Images</h2>
    <ul>
      <li><Link to='/img/2'>Tomato</Link></li>
      <li><Link to='/img/4'>Crimson</Link></li>
    </ul>
  </div>
)

const Gallery = () => (
  <div>
  <h1>Test</h1>
  </div>
)
const ModalGallery = () => (
  <Router>
    <Route component={HomeNat} />
  </Router>
)

export default ModalGallery
