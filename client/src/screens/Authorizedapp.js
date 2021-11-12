import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './../components/Header'
import Home from './../components/Home'
import Upload from './../components/Upload'

const Authorizedapp = () => {
  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto px-2 lg:px-0">
        <Switch>
          <Route path="/upload" component={Upload} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </>
  )
}

export default Authorizedapp
