import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import { isAuthenticated } from "./auth"

/**
 * A wrapper around the element which checks if the user is authenticated
 * If authenticated, renders the passed element
 * If not authenticated, redirects the user to Login page.
 */
const PrivateRoute = ({ children }) => {
  let location = useLocation()
  return isAuthenticated() ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  )
}

export default PrivateRoute
