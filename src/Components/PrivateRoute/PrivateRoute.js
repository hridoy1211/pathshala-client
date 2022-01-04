import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user, isLoading} = useAuth();

    if(isLoading){
        return <div className="d-flex justify-content-center" style={{marginTop: '100px'}}>
        <div className="spinner-grow text-danger" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="visually-hidden ">Loading...</span>
        </div>
      </div>
      }

        return (
            <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
            />
        );
        };

export default PrivateRoute;