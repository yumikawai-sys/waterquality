import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import {useAuth} from './AuthProvider'

function ProtectedRoutes() {
    const loginInfo = useAuth()
    return (
        loginInfo.currentUser ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default ProtectedRoutes
