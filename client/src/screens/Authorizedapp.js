import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './../components/Header'
import Home from './../components/Home'
import Upload from './../components/Upload'

const Authorizedapp = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/upload" component={Upload} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  )
}

export default Authorizedapp
