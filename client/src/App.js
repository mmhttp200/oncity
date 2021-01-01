import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import React, { Suspense, useEffect, useState } from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, updateSession } from './features/session/sessionSlice';

const CreateNewAccount = React.lazy(()=>import('./Pages/CreateNewAccount'))
const Login = React.lazy(()=>import('./Pages/Login'))
const Dashboard = React.lazy(()=>import('./Pages/Dashboard'))
const CreateNewPage = React.lazy(()=>import('./Pages/CreateNewPage'))
const EditPage = React.lazy(()=>import('./Pages/EditPage'))
const EditAccount = React.lazy(()=>import('./Pages/EditAccount'))
const Logout = React.lazy(()=>import('./Pages/Logout'))
const Page = React.lazy(()=>import('./Pages/Page'))
const About = React.lazy(()=>import('./Pages/About'))
const Home = React.lazy(()=>import('./Pages/Home'))

function App() {

  const dispatch = useDispatch()
  const sessionStatus = useSelector(state=>state.session.status)

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      const result = dispatch(fetchUser(sessionStorage.getItem('token')))
      result.then(data=>{
        if(!data.payload.success) sessionStorage.removeItem('token')
      })
      .catch(err=>{sessionStorage.removeItem('token')})
    }
  }, [sessionStatus])

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/create-new-account">
        {sessionStatus ? <Redirect to="/dashboard" /> : <CreateNewAccount />}
      </Route>
      <Route exact path="/login">
        {sessionStatus ? <Redirect to="/dashboard" /> : <Login />}
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/dashboard">
        {sessionStatus ? <Dashboard /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/create-new-page">
        {sessionStatus ? <CreateNewPage /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/edit-page">
        {sessionStatus ? <EditPage /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/edit-account">
        {sessionStatus ? <EditAccount /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/logout">
        {sessionStatus ? <Logout /> : <Redirect to="/login" />}
      </Route>
      <Route path="/page/:uri" component={Page} />
      <Route exact path="/">
        {sessionStatus ? <Redirect to="/dashboard" /> :  <Home />}
      </Route>
    </Switch>
    </BrowserRouter>
    </Suspense>
  );
}

export default App;
