import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import {useAuth} from './AuthProvider'

function ProtectedRoutesforLogin() {
    const loginInfo = useAuth()
    return (
        loginInfo.currentUser ? <Navigate to="/admin"/> : <Outlet/>
    )
}

export default ProtectedRoutesforLogin
