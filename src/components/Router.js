import React from 'react'
import { BrowserRouter, Route} from "react-router-dom"

import Header from './Header'

import Home from './Home'
import Page1 from './Page1'
import Page2 from './Page2'
import CloneElement from './CloneElement'

export default function Router() {

  return (
    <BrowserRouter>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/Page1" component={Page1} />
        <Route path="/Page2" component={Page2} />
        <Route path="/CloneElement" component={CloneElement} />

      </div>
    </BrowserRouter>
  )
}