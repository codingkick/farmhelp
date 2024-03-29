import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateRoute = ({component: Component, ...rest}) => {
    const state = useSelector(state => state.userReducer);
    return (
        <Route {...rest} render={props => (
            isLogin(state.name) ?
                <Component {...props} />
            : <Redirect to="/"/>
        )} />
    );
};
const isLogin=(user)=>{
    if(user==="maiVKisaan")
    {
        return false;
    }
    return true;
}
export default PrivateRoute;