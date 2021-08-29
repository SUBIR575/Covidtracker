import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Nav_bar from './components/Nav_bar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './sass/custom.scss'
import Footer from './components/Footer'
import WestBengal from './components/WestBengal';

const App = () => {
  return (
    <>
    <Nav_bar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/statewise" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/westbengal" component={WestBengal}/>
      <Redirect to="/" />
    </Switch>
    <Footer/>
    </>
  )
}

export default App
