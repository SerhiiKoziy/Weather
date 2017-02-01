import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {routerActions} from 'react-router-redux';
import {Root, Auth,Lesson, Quiz, StartPage} from '../pages';
import NavBar from '../components/NavBar/NavBar';
//import {App} from '../pages'
//import {UserAuthWrapper} from 'redux-auth-wrapper'


export default(

        <Route name="Root" path='/' component={Root}>
            <Route name="quiz"  path='quiz/:id'  component={Quiz} />
            <IndexRoute name="StartPage"   component={StartPage}/>
        </Route>
);
// <Route name="history" path='history' component={UserIsAuthenticated(History)}/>
// <Route name="auth" path="login" component={Auth}/>
//     <IndexRoute name="dashboard" component={UserIsAuthenticated(Dashboard)}/>

//
