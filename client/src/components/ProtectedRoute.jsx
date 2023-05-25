import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import StartingLoader from './startingLoader';

const ProtectedRoute = () => {
    const {isLoading, isAuthenticated } = useAuth0();
    if(isLoading) return (<StartingLoader />);
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;