import React from 'react'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from '../components/Projects'
import Contacts from '../components/Contacts'
import { Route, Switch } from 'react-router-dom';




const Root = () => {
  return (
    <div>
      {/* <Navbar/> */}


      <Switch>
          <Route exact path={'/'} component={Navbar}/>
          <Route path={'/home'} component={Navbar}/>
          <Route path={'/about'} component={Navbar}/>
          <Route path={'/projects'} component={Navbar}/>
          <Route path={'/contacts'} component={Navbar}/>
       
      </Switch>


      <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/home'} component={Home}/>
          <Route path={'/about'} component={About}/>
          <Route path={'/projects'} component={Projects}/>
          <Route path={'/contacts'} component={Contacts}/>
          <Route path={'*'}> <h1>404 Not Found</h1></Route>
      </Switch>

   
    </div>
  )
}

export default Root



//react-router-dom5 => 