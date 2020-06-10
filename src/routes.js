import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Simulation from './pages/Simulation'

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/simulation" component={Simulation} />
      </Switch>
    </BrowserRouter>
  )
}
