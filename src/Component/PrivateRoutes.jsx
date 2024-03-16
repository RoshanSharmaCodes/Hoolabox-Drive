import React from "react"
import { useAuth } from "../Context/AuthProvider"
import { Route } from "react-router-dom/cjs/react-router-dom"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"

export default function PrivateRoutes({ component: Component, ...rest }) {
  const { currentUser } = useAuth()
  return (
    <Route
      {...rest}
      render={(props) => {
       return currentUser ? <Component /> : <Redirect to="/Login" />
      }}
    ></Route>
  )
}
