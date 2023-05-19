import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PriviteRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <h1 className='text-5xl'>Loading...........</h1>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={{from: location}}></Navigate>
    );
};

export default PriviteRoute;

// 12-43