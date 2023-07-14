import {Navigate} from 'react-router-dom';

export default function ProtectedRoute({children, user}){
    if(Object.keys(user).length === 0){
        return <Navigate to='/' /> ;
    }
    return children;
}