import React, { useEffect, useState } from "react"
import { Switch, Route, useLocation } from "react-router-dom"

import "./css/style.scss"

import { focusHandling } from "cruip-js-toolkit"
import "./charts/ChartjsConfig"

// Import pages
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"

function App() {
  const startTime = new Date()
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto"
    window.scroll({ top: 0 })
    document.querySelector("html").style.scrollBehavior = ""
    focusHandling("outline")
  }, [location.pathname]) // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          {!isLoggedIn ? (
            <Login
              onlogin={() => {
                setIsLoggedIn(true)
              }}
            />
          ) : (
            <Dashboard starttime={startTime} />
          )}
        </Route>
      </Switch>
    </>
  )
}

export default App
