import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {
    const isLoggedIn = JSON.parse(localStorage.getItem('loginUser'))
  return isLoggedIn && isLoggedIn.role === "admin" ? <Outlet/> : <Navigate to={'/'}/>;
}

export default ProtectedRoutes