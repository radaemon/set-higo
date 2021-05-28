import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Play from './pages/Play/Play'
import NotFound from './pages/NotFound/NotFound'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/play" exact component={Play} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
