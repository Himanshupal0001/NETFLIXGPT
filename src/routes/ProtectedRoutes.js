import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import usePaymentWall from '../hooks/usePaymentWall';
function ProtectedRoutes() {
    const { user } = useSelector(store => store.auth);
    const location = useLocation();
    return (
        user?.token ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default ProtectedRoutes
