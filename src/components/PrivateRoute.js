import React from 'react'
import { Navigate } from 'react-router-dom';
function PrivateRoute({logged,children}) {
    if(logged){
        return children;
    }
    else{
        return <Navigate to="/login" />
    }
}

export default PrivateRoute